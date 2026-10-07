#!/usr/bin/env bash
set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() {
    echo -e "${GREEN}→${NC} $1"
}

error() {
    echo -e "${RED}✗${NC} $1" >&2
}

warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

discover_packages() {
    local package_dirs=()

    while IFS= read -r package_json; do
        local dir=$(dirname "$package_json")
        package_dirs+=("$dir")
    done < <(find . -type f -name "package.json" \
        -not -path "*/node_modules/*" \
        -not -path "*/.git/*" \
        -not -path "./package.json" \
        | sort)

    printf '%s\n' "${package_dirs[@]}"
}

get_package_name() {
    local dir="$1"
    if [[ -f "$dir/package.json" ]]; then
        if command -v jq &> /dev/null; then
            jq -r '.name // empty' "$dir/package.json" 2>/dev/null || echo ""
        else
            sed -n 's/.*"name"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' "$dir/package.json" | head -1
        fi
    fi
}

clean_directory() {
    local dir="$1"
    local package_name="$2"

    if [[ -n "$package_name" ]]; then
        log "Cleaning $package_name in $dir"
    else
        log "Cleaning $dir"
    fi

    local clean_items=()

    [[ -d "$dir/node_modules" ]] && clean_items+=("node_modules")
    [[ -d "$dir/.turbo" ]] && clean_items+=(".turbo")

    if [[ "$dir" == *"/apps/"* ]]; then
        [[ -d "$dir/.next" ]] && clean_items+=(".next")
        [[ -d "$dir/dist" ]] && clean_items+=("dist")
    elif [[ "$dir" == *"/packages/"* ]]; then
        [[ -d "$dir/dist" ]] && clean_items+=("dist")
    elif [[ "$dir" == *"/tooling/"* ]]; then
        true
    fi

    if [[ ${#clean_items[@]} -gt 0 ]]; then
        (
            cd "$dir"
            git clean -xdf "${clean_items[@]}" 2>/dev/null || {
                for item in "${clean_items[@]}"; do
                    rm -rf "$item"
                done
            }
        )
    fi
}

clean_house() {
    log "Starting deep clean of monorepo..."

    local packages=()
    while IFS= read -r package_dir; do
        packages+=("$package_dir")
    done < <(discover_packages)

    for package_dir in "${packages[@]}"; do
        local package_name=$(get_package_name "$package_dir")
        clean_directory "$package_dir" "$package_name"
    done

    log "Cleaning root dir"
    git clean -xdf node_modules pnpm-lock.yaml 2>/dev/null || {
        rm -rf node_modules pnpm-lock.yaml
    }

    log "Reinstalling deps"
    pnpm install

    log "Building"
    build_targeted
}

build_targeted() {
    local build_order=(
      "@dcs/eslint-config"
      "@dcs/prettier-config"
      "@dcs/vitest-config"
      "@dcs/types"
      "@dcs/ui"
    )

    for package in "${build_order[@]}"; do
        log "Building $package"
        pnpm turbo build --filter="$package"
    done
}

build_by_pattern() {
    local pattern="$1"
    log "Building packages matching pattern: $pattern"

    while IFS= read -r package_dir; do
        local package_name=$(get_package_name "$package_dir")

        if [[ -n "$package_name" ]] && [[ "$package_name" == *"$pattern"* ]]; then
            log "Building $package_name"
            pnpm turbo build --filter="$package_name"
        fi
    done < <(discover_packages)
}

run_by_pattern() {
    local pattern="$1"
    log "running packages matching pattern: $pattern"

    while IFS= read -r package_dir; do
        local package_name=$(get_package_name "$package_dir")

        if [[ -n "$package_name" ]] && [[ "$package_name" == *"$pattern"* ]]; then
            log "spinning up $package_name"
            pnpm turbo dev --filter="$package_name"
        fi
    done < <(discover_packages)
}


list_packages() {
    log "Discovering packages:"

    local tooling_packages=()
    local app_packages=()
    local lib_packages=()

    while IFS= read -r package_dir; do
        local package_name=$(get_package_name "$package_dir")
        local relative_dir="${package_dir#./}"

        if [[ -n "$package_name" ]]; then
            local entry="  ${package_name} (${relative_dir})"
        else
            local entry="  [unnamed] (${relative_dir})"
        fi

        if [[ "$package_dir" == *"/tooling/"* ]]; then
            tooling_packages+=("$entry")
        elif [[ "$package_dir" == *"/apps/"* ]]; then
            app_packages+=("$entry")
        elif [[ "$package_dir" == *"/packages/"* ]]; then
            lib_packages+=("$entry")
        else
            lib_packages+=("$entry")
        fi
    done < <(discover_packages)

    if [[ ${#tooling_packages[@]} -gt 0 ]]; then
        echo "Tooling:"
        printf '%s\n' "${tooling_packages[@]}"
        echo ""
    fi

    if [[ ${#lib_packages[@]} -gt 0 ]]; then
        echo "Packages:"
        printf '%s\n' "${lib_packages[@]}"
        echo ""
    fi

    if [[ ${#app_packages[@]} -gt 0 ]]; then
        echo "Apps:"
        printf '%s\n' "${app_packages[@]}"
        echo ""
    fi
}

clean_by_pattern() {
    local pattern="$1"
    log "Cleaning packages matching pattern: $pattern"

    while IFS= read -r package_dir; do
        local package_name=$(get_package_name "$package_dir")

        if [[ -n "$package_name" ]] && [[ "$package_name" == *"$pattern"* ]]; then
            clean_directory "$package_dir" "$package_name"
        fi
    done < <(discover_packages)
}

main() {
    local command="${1:-help}"

    case "$command" in
        clean:house)
            clean_house
            ;;
        build:targeted)
            build_targeted
            ;;
        clean|--clean|-c)
            if [[ -n "${2:-}" ]]; then
                clean_by_pattern "$2"
            else
                error "Please provide a pattern to clean (e.g., ./manage.sh clean db)"
                exit 1
            fi
            ;;
        build|--build|-b)
            if [[ -n "${2:-}" ]]; then
                build_by_pattern "$2"
            else
                error "Please provide a pattern to build (e.g., ./manage.sh build db)"
                exit 1
            fi
            ;;
        run|--run|-r)
            if [[ -n "${2:-}" ]]; then
                run_by_pattern "$2"
            else
                error "Please provide a pattern to run (e.g., ./manage.sh run wallet)"
                exit 1
            fi
            ;;
        list)
            list_packages
            ;;
        help|--help|-h)
            cat << EOF
Monorepo Package Management Script

Usage: $0 [command] [options]

Commands:
    clean:house         Deep clean entire monorepo and rebuild
    build:targeted      Build targeted packages in order
    clean <pattern>     Clean packages matching pattern
    build <pattern>     Build packages matching pattern
    list                List all discovered packages
    help                Show this help message

Examples:
    $0 clean:house              # Full clean and rebuild
    $0 build:targeted           # Build core packages
    $0 clean types                 # Clean packages with 'types' in name
    $0 build db         # Build packages with 'db' in name
    $0 list                     # Show all packages

Environment:
    Set DEBUG=1 for verbose output

EOF
            ;;
        *)
            error "Unknown command: $command"
            echo "Use '$0 help' for usage information"
            exit 1
            ;;
    esac
}

main "$@"

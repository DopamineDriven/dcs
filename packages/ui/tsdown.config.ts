import { arch, platform } from "node:os";
import { join, relative, resolve } from "node:path";
import type { UserConfig } from "tsdown";
import { defineConfig } from "tsdown";

const p = platform();
const a = arch();
const executable = p === "win32" ? "tsgo.exe" : "tsgo";
const dirname = `native-preview-${p}-${a}`;

const path = resolve(
  join(
    process.cwd(),
    `../../node_modules/@typescript/${dirname}/lib/${executable}`
  )
);

export default defineConfig(
  options =>
    ({
      ...options,
      entry: [
        "src/globals.css",
        "src/index.ts",
        "src/icons/index.tsx",
        "src/lib/*.ts",
        "src/base/*.ts",
        "src/carousel/.*tsx",
        "src/hooks/*.ts",
        "src/toast/*.ts",
        "src/carousel/*.tsx",
        "src/toast/*.tsx",
        "src/ui/*.tsx",
        "!src/services/postbuild.ts",
        "!src/test/*.ts",
        "!src/test/*.tsx"
      ],
      copy: [
        {
          from: "src/globals.css",
          to: "dist",
          rename: "tailwind.css"
        }
      ],
      dts: { tsgo: { path } },
      external: ["react"],
      platform: "neutral",
      fixedExtension: false,
      target: ["esnext"],
      format: ["esm"],
      tsconfig: relative(process.cwd(), "tsconfig.json"),
      cwd: process.cwd(),
      clean: true,
      sourcemap: false,
      outDir: "dist",
      unbundle: true,
      css: {
        fileName: "globals.css",
        inject: false,
        minify: false,
        transformer: "postcss"
      }
    }) satisfies UserConfig
);

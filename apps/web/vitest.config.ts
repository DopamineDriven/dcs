import { sharedConfig } from "@dcs/vitest-config";
import { mergeConfig } from "vitest/config";

// `*.spec.*` belongs to vitest; `src/tests/*.test.ts` are plain `node --test` files.
export default mergeConfig(sharedConfig(process.cwd()), {
  test: { include: ["src/**/*.spec.{ts,tsx}"] }
});

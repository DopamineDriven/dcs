import storybookPlugin from "eslint-plugin-storybook";

/** @type {Awaited<import('typescript-eslint').Config>} */

export default [
  {
    files: [
      "**/*.stories.mjs",
      "**/*.stories.cjs",
      "**/*.stories.ts",
      "**/*.stories.tsx",
      "**/*.stories.jsx",
      "**/*.stories.js",
      "**/*.story.mjs",
      "**/*.story.cjs",
      "**/*.story.ts",
      "**/*.story.tsx",
      "**/*.story.jsx",
      "**/*.story.js"
    ],
    plugins: {
      storybook: storybookPlugin
    },
    rules: {
      ...storybookPlugin.configs.recommended.rules,
      ...storybookPlugin.configs["addon-interactions"].rules
    }
  }
];

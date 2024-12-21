import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      globals: globals.node,
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "no-console": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "no-var": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "no-duplicate-imports": "error",
      "semi": ["error", "always"],
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
    },
  },
];
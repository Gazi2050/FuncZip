import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["src/**/*.ts"], // Target TypeScript files in src and test folders
    languageOptions: {
      parser: tsParser,
      globals: globals.node,
    },
    plugins: {
      "@typescript-eslint": tsPlugin, // Include TypeScript ESLint plugin
    },
    rules: {
      "no-console": "error", // Disallow console.log
      "@typescript-eslint/no-unused-vars": "error", // Disallow unused variables
      "no-var": "error", // Disallow 'var', use 'let' or 'const' instead
      "@typescript-eslint/no-explicit-any": "error", // Disallow the 'any' type
      "no-duplicate-imports": "error", // Disallow duplicate imports
      "semi": ["error", "always"], // Require semicolons
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"], // Default configuration for all files
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
    },
  },
];
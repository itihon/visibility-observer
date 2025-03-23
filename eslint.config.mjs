import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  { ignores: ["dist/*"] },
];
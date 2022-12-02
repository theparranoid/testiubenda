/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    "plugin:vitest-globals/recommended"
  ],
  env: {
    "vitest-globals/env": true
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
};

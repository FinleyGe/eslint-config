module.exports = {
  extends: [
    "@finley_ge/eslint-config-ts",
    "plugin:vue/vue3-recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
}

module.exports = {
  extends: [
    "@finley_ge/eslint-config-base",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/ban-ts-comment": ["error", { "ts-ignore": "allow-with-description" }],
    "@typescript-eslint/no-explicit-any": "off"
  },
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
};

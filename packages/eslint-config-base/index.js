module.exports = {
  rules: {
    "indent": ["error", 2],
    "no-trailing-spaces": "error",
    "quotes": ["error", "double"],
    "semi": [2, "always"],
    "no-multiple-empty-lines": ["warn", { "max": 1, "maxEOF": 0 }],
    "linebreak-style": ["error", "unix"],
    "import/order": "error",
    "import/newline-after-import": "error",
  },
  plugins: [
    "import"
  ],
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
};

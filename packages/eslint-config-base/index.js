module.exports = {
  rules: {
    "indent": ["error", 2],
    "no-trailing-spaces": "error",
    "quotes": ["error", "double"],
    "semi": [2, "always"],
    "no-multiple-empty-lines": ["warn", { "max": 1, "maxEOF": 0 }],
    "linebreak-style": ["error", "unix"],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        "groups": [
          "index",
          "sibling",
          "parent",
          "internal",
          "external",
          "builtin",
          "object",
          "type"
        ]
      }
    ],
    "import/newline-after-import": "error",
  },
  plugins: [
    "import"
  ],
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
};

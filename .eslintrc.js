module.exports = {
  globals: {
    Config: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescritp-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
};

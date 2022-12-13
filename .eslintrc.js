module.exports = {
  root: true,
  extends: ["@react-native-community", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        alias: {
          "@shared": "./src/shared/*",
        },
      },
    },
  },
  rules: {
    "react-hooks/exhaustive-deps": 0,
    "react-native/no-inline-styles": 0,
    quotes: [2, "double"],
    semi: 0,
  },
}

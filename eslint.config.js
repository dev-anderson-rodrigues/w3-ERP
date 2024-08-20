// eslint.config.js
import { ESLint } from "eslint";

export default new ESLint({
  baseConfig: {
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended", // Adiciona Prettier
    ],
    plugins: ["react", "@typescript-eslint", "prettier"],
    rules: {
      "prettier/prettier": ["error", {
        "singleQuote": true,
        "trailingComma": "all",
        "printWidth": 80,
        "tabWidth": 2,
        "semi": true
      }],
  "quotes": ["error", "single"],
  "semi": ["error", "always"],
    },
  },
});

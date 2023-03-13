module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "project": "./tsconfig.json",
    "parser": "@typescript-eslint/parser",
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "ignorePatterns": [
    ".eslintrc.cjs",
  ],
  "plugins": [
    "@typescript-eslint",
    "simple-import-sort",
    "prettier",
    "eslint-plugin-prettier"
  ],
  "overrides": [],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:vue/vue3-recommended"
  ],
  "rules": {
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error"
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  },
  "parser": "vue-eslint-parser"
};

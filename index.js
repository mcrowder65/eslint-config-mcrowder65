module.exports = {
  root: true,
  extends: [
    "walmart",
    "plugin:jest/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@babel/eslint-parser",
  plugins: ["import", "react", "babel", "react-native"],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },
  settings: {
    "import/core-modules": ["redux-saga/effects", "redux-saga/utils"],
    "import/resolver": "webpack",
    react: {
      version: "detect",
    },
  },
  rules: {
    "eol-last": ["off"],
    "valid-jsdoc": ["off"],
    "func-style": ["off"],
    "no-use-before-define": ["error", { functions: false }],
    "import/no-unresolved": ["error", { caseSensitive: false }],
    "import/named": ["error"],
    "import/default": ["error"],
    "import/export": ["error"],
    "import/no-duplicates": ["error"],
    "react/no-unused-prop-types": ["error"],
    "react/require-default-props": ["off"],
    "react/jsx-handler-names": ["off"],
    "spaced-comment": "off",
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: true },
    ],
    "arrow-parens": "off",
    eqeqeq: "off",
    "import/newline-after-import": "off",
    "array-bracket-newline": "off",
    "require-await": "off",
    "no-whitespace-before-property": "error",
    "react/jsx-uses-react": "error",
    "comma-dangle": "off",
    "quote-props": "off",
    "react/jsx-uses-vars": 2,
    "no-magic-numbers": "off",
    "object-curly-spacing": ["error", "always"],
    "new-cap": "off",
    "no-invalid-this": 0,
    "babel/no-invalid-this": 2,
    "react/prop-types": ["error", { skipUndeclared: true }],
    "no-debugger": "warn",
    "no-alert": "off",
    "max-nested-callbacks": "off",
    "max-statements": "off",
    "filenames/match-regex": "off",
    "consistent-return": "off",
    "react-native/no-unused-styles": "error",
    camelcase: "off",
    semi: "off",
    "no-array-constructor": "off",
    "prefer-const": "off",
    "jest/expect-expect": "off",
    "no-unused-expressions": "off",
    "babel/no-unused-expressions": "error",
    complexity: "off",
    "react-hooks/exhaustive-deps": "error",
    "no-console": "error",
    "no-param-reassign": "off",
    "no-shadow": "off",
  },
};

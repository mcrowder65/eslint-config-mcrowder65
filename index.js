module.exports = {
    root: true,
    extends: ["walmart", "plugin:jest/recommended"],
    parser: "babel-eslint",

    plugins: ["import", "react", "babel", "cypress"],

    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
        "cypress/globals": true
    },

    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            generators: true,
            experimentalObjectRestSpread: true
        }
    },
    settings: {
        "import/core-modules": [
            "redux-saga/effects",
            "redux-saga/utils"
        ],
        "import/resolver": "webpack"
    },
    rules: {
        "eol-last": [
            "off"
        ],
        "valid-jsdoc": [
            "off"
        ],
        "no-param-reassign": [
            "error",
            {
                "props": true
            }
        ],
        "func-style": [
            "off"
        ],
        "arrow-parens": ["error", "always"],
        "no-use-before-define": ["error", { "functions": false }],
        "import/no-unresolved": ["error", { caseSensitive: false }],
        "import/named": ["error"],
        "import/default": ["error"],
        "import/export": ["error"],
        "import/no-duplicates": ["error"],
        "react/no-unused-prop-types": ["error"],
        "react/require-default-props": ["error"],
        "react/jsx-handler-names": ["off"],
        "indent": ["error", 2, {"SwitchCase": 1}],
        "spaced-comment": ["error", "always"],
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": true }],
        "eqeqeq": "off",
        "import/newline-after-import": "off",
        "array-bracket-newline": "off",
        "require-await": "error",
        "no-whitespace-before-property": "error",
        "react/jsx-uses-react": "error",
        "quote-props": "off",
        "react/jsx-uses-vars": 2,
        "no-magic-numbers": "off",
        "object-curly-spacing": ["error", "always"],
        "new-cap": "off",
        "comma-dangle": "off",
        "no-invalid-this": 0,
        "babel/no-invalid-this": 2,
        "react/prop-types": ["error", {skipUndeclared: true}],
        "react/default-props-match-prop-types": "off",
        "no-debugger": "warn",
        "no-console": "warn",
        "no-alert": "off",
    }
};
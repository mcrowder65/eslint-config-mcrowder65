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
        ]
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
        "no-use-before-define": ["error", { "functions": false }],
        "import/no-unresolved": ["error"],
        "import/named": ["error"],
        "import/default": ["error"],
        "import/export": ["error"],
        "import/no-duplicates": ["error"],
        "react/no-unused-prop-types": ["error"],
        "react/require-default-props": ["error"],
        "react/jsx-handler-names": ["error"],
        "import/order": ["error", {"groups": [["builtin", "external"]], "newlines-between": "always"}],
        "indent": ["error", 2]
    }
};
module.exports = {
    root: true,
    extends: ["walmart"],
    parser: "babel-eslint",

    plugins: ["import", "react"],

    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true
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

    rules: {}
};
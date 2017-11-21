module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        sourceType: "module"
    },
    rules: {
        indent: ["error", "tab"],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "comma-dangle": ["error", "always"],
        "no-unused-vars": 0,
        "no-console": 0,
    },
    plugins: [
        "vue",
    ],
    globals: {
        expect: true,
        sinon: true,
        describe: true,
        it: true
    }
};

module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential', 
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    ],
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
        "comma-dangle": ["error", {
            "arrays": "never",
            "objects": "always",
            "imports": "never",
            "exports": "never",
            "functions": "ignore"
        }],
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

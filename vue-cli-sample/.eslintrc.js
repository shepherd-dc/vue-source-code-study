module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:vue/base",
        "standard"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "parser": 'babel-eslint'
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
};
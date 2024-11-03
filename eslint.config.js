import stylistic from '@stylistic/eslint-plugin'
import tseslint from "typescript-eslint";
import eslint from "@eslint/js";

export default [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["**/*.ts"],
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            '@stylistic/indent': ['error', 4],
            '@stylistic/semi': ['error', "always"],
            '@stylistic/quotes': ['error', "double"],
            '@stylistic/function-paren-newline': ['error', { "minItems": 3 }],
        },
    },
];

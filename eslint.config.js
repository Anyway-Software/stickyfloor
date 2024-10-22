import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import prettier from 'eslint-config-prettier' // Disables ESLint rules that conflict with Prettier
import prettierPlugin from 'eslint-plugin-prettier' // Runs Prettier as an ESLint rule
import unusedImports from 'eslint-plugin-unused-imports'

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    },
    {
        ignores: [
            'node_modules/**',
            'public/build/**',
            'public/build/assets/**',
            'vendor/**',
        ],
    },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        settings: {
            react: {
                version: 'detect', // Automatically detect the React version
            },
        },
        rules: {
            'react/react-in-jsx-scope': 'off', // Disable the rule requiring React in scope
        },
    },
    prettier, // Disable conflicting ESLint rules
    {
        plugins: { prettier: prettierPlugin, 'unused-imports': unusedImports },
        rules: {
            'prettier/prettier': [
                'error',
                {
                    tabWidth: 4, // Enforce tab spaces of 4
                    singleQuote: true, // Use single quotes in JavaScript
                    htmlWhitespaceSensitivity: 'strict', // Enforce double quotes in HTML
                    trailingComma: 'all', // Enforce trailing commas where valid in ES5
                    semi: false, // No semicolons at the end of lines
                },
            ],
            // Add the rules for removing unused imports
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
        },
    },
]

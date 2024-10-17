import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import prettier from 'eslint-config-prettier' // Disables ESLint rules that conflict with Prettier
import prettierPlugin from 'eslint-plugin-prettier' // Runs Prettier as an ESLint rule

export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    prettier, // Disable conflicting ESLint rules
    {
        plugins: { prettier: prettierPlugin },
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
        },
    },
]

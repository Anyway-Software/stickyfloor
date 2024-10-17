## Stickyfloor

### Linting and code formatting
#### Ridiculous amount of packages needed to make this happen
- `eslint`: Linting tool for identifying problematic patterns in JavaScript code.
- `prettier`: Code formatter.
- `eslint-config-prettier`: Disables ESLint rules that might conflict with Prettier.
- `eslint-plugin-prettier`: Integrates Prettier with ESLint, allowing Prettier to run as an ESLint rule.
- `globals`: Recognizes global variables (e.g., `window`, `process`) from different environments in the project.
- `@eslint/js`: Core JavaScript parser and rules for ESLint.
- `@typescript-eslint/parser`: Allows ESLint to parse TypeScript code.
- `@typescript-eslint/eslint-plugin`: TypeScript-specific linting rules for ESLint.
- `eslint-plugin-react`: Lints React-specific code, including JSX and React best practices.

#### Config files
- eslint.config.js
- .pretterrc
- .vscode/settings.json

module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: ['react'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'import/no-unresolved': 'off',
    },
    ignorePatterns: ['**/*.svg'],
    settings: {
        react: {
            version: 'detect',
        },
    },
};

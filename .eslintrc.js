module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        complexity: ['error', 7],
        semi: ['error', 'never'],
        'global-require': 'error',
        'no-unused-vars': 'error',
        'no-case-declarations': 0,
        'no-param-reassign': ['error', { props: false }],
        'comma-dangle': ['error', 'always-multiline'],
        'object-curly-spacing': ['error', 'always'],
        'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
        'no-underscore-dangle':
            ['error', { allowAfterThis: false, allow: ['__', '__data', '__html'] }],
        'max-len': ['error', 250],
        'react/prefer-stateless-function': 'off',
        'react/no-multi-comp': 'off',
        'react/display-name': ['off', { ignoreTranspilerName: false }],
        'react/jsx-no-bind':
            [
                'error',
                {
                    ignoreRefs: true,
                    allowArrowFunctions: false,
                    allowBind: false
                }
            ],
        'react/jsx-filename-extension': 'off',
        'react/jsx-no-duplicate-props': 'error',
        'react/require-default-props': 'off',
        'react/no-unused-prop-types': 'off',
        'react/no-string-refs': 'error',
        'react/prefer-es6-class': ['error', 'always'],
        'react/jsx-pascal-case': 'error',
        'react/jsx-handler-names':
            ['error', { eventHandlerPrefix: 'handle', eventHandlerPropPrefix: 'on' }],
        'jsx-quotes': ['error', 'prefer-single'],
        'quotes': ["error", "single"],
        indent: ['error', 2, { SwitchCase: 1 }],
        'react/sort-comp':
            [
                'error',
                {
                    order: [
                        'static-methods',
                        'lifecycle',
                        '/^handle.+$/',
                        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
                        'everything-else',
                        '/^render.+$/',
                        'render'
                    ]
                }
            ],
        'no-console': 'error',
        'no-confusing-arrow': 'off',
        'no-alert': 'off',
        'no-debugger': 'off',
    }
}
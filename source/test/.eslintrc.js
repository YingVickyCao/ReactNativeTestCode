module.exports = {
	plugins: ['prettier', 'react'],
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
	rules: {
		'prettier/prettier': 'error',
		'no-console': 'off'
	},
	env: {
		node: true
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module'
	},
	parser: 'babel-eslint'
};

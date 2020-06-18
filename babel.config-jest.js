module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				modules: 'commonjs',
			},
		],
		'module:metro-react-native-babel-preset',
	],
	plugins: [
		'@babel/plugin-transform-modules-commonjs',
		'babel-plugin-styled-components',
		[
			'module-resolver',
			{
				alias: {
					assets: './src/assets',
					configs: './src/configs',
					data: './src/data',
					hooks: './src/hooks',
					states: './src/states',
					screens: './src/screens',
					sharedUI: './src/sharedUI',
					utils: './src/utils',
				},
			},
		],
	],
};

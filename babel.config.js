module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
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

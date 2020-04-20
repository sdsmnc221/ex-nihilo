module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['.'],
				alias: {
					assets: './src/assets',
					configs: './src/configs',
					screens: './src/screens',
					sharedUI: './src/sharedUI',
					utils: './utils',
				},
			},
		],
	],
};

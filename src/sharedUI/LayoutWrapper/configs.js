import { SCREENS } from 'configs/constants';

const navigationBarConfigs = {
	transparentWhite: {
		transparentButtons: true,
		transparentBG: true,
	},
	transparentColor: {
		transparentButtons: false,
		transparentBG: true,
	},
	whiteColor: {
		transparentButtons: false,
		transparentBG: false,
	},
};

const statusBarConfigs = {
	lightWhiteText: {
		light: true,
		whiteText: true,
	},
	lightColorText: {
		light: true,
		whiteText: false,
	},
};

const getLayoutConfigs = (screen) => {
	let configs = {};

	switch (screen) {
		case SCREENS.HOME:
			configs = {
				navigationBar: true,
				navigationBarConfigs: navigationBarConfigs.transparentWhite,
				statusBar: true,
				statusBarConfigs: statusBarConfigs.lightWhiteText,
			};
			break;
		case SCREENS.ALL_APPS:
			configs = {
				navigationBar: true,
				navigationBarConfigs: navigationBarConfigs.transparentColor,
				statusBar: true,
				statusBarConfigs: statusBarConfigs.lightColorText,
			};
			break;
		case SCREENS.SMS:
		case SCREENS.CONTACTS:
		case SCREENS.ALBUM:
			configs = {
				navigationBar: true,
				navigationBarConfigs: navigationBarConfigs.whiteColor,
				statusBar: true,
				statusBarConfigs: statusBarConfigs.lightColorText,
			};
			break;
		default:
			break;
	}

	return configs;
};

export default getLayoutConfigs;

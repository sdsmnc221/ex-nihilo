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

const getLayoutConfigs = (screen) => {
	let configs = {};

	switch (screen) {
		case SCREENS.HOME:
			configs = {
				navigationBar: true,
				navigationBarConfigs: navigationBarConfigs.transparentWhite,
			};
			break;
		case SCREENS.ALL_APPS:
			configs = {
				navigationBar: true,
				navigationBarConfigs: navigationBarConfigs.transparentColor,
			};
			break;
		case SCREENS.SMS:
		case SCREENS.CONTACTS:
		case SCREENS.ALBUM:
			configs = {
				navigationBar: true,
				navigationBarConfigs: navigationBarConfigs.whiteColor,
			};
			break;
		default:
			break;
	}

	return configs;
};

export default getLayoutConfigs;

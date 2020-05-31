import { SCREENS } from 'configs';

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
	dark: {
		light: false,
		whiteText: true,
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
				gapForStatusBar: true,
			};
			break;
		case SCREENS.SMS:
		case SCREENS.SMS_CONVERSATION:
		case SCREENS.SMS_JANUS:
		case SCREENS.CONTACTS:
		case SCREENS.CONTACTS_DETAILS:
		case SCREENS.ALBUM:
		case SCREENS.ALBUM_PHOTO:
		case SCREENS.FACEBOOK:
		case SCREENS.FACEBOOK_LOGIN:
		case SCREENS.EMAIL:
		case SCREENS.EMAIL_LOGIN:
		case SCREENS.EMAIL_DETAILS:
		case SCREENS.INTERNET:
			configs = {
				navigationBar: true,
				navigationBarConfigs: navigationBarConfigs.whiteColor,
				statusBar: true,
				statusBarConfigs: statusBarConfigs.lightColorText,
				gapForStatusBar: true,
			};
			break;
		default:
			break;
	}

	return configs;
};

export default getLayoutConfigs;

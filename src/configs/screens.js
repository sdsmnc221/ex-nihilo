import { colors } from './theme';
import { additionalStyles } from './styles';

const SCREENS = {
	SPLASH: 'SplashScreen',
	WARNING: 'WarningScreen',
	INTRO: 'IntroScreen',
	NOTIFICATIONS: 'NotificationsScreen',
	LOCK: 'LockScreen',
	HOME: 'HomeScreen',
	ALL_APPS: 'AllAppsScreen',
	SMS: 'SmsScreen',
	SMS_CONVERSATION: 'SmsConversationScreen',
	SMS_JANUS: 'JanusConversationScreen',
	CONTACTS: 'ContactsScreen',
	CONTACTS_DETAILS: 'ContactDetailsScreen',
	ALBUM: 'AlbumScreen',
	ALBUM_PHOTO: 'AlbumPhotoScreen',
	FACEBOOK: 'FacebookScreen',
	FACEBOOK_LOGIN: 'FacebookLoginScreen',
	EMAIL: 'EmailScreen',
	EMAIL_LOGIN: 'EmailLoginScreen',
	EMAIL_DETAILS: 'EmailDetailsScreen',
	INTERNET: 'InternetScreen',
};

const getHeaderName = (screen) => {
	let headerName = false;

	switch (screen) {
		case SCREENS.SMS:
			headerName = 'Messagerie';
			break;
		case SCREENS.JANUS:
			headerName = 'Janus';
			break;
		case SCREENS.CONTACTS:
			headerName = 'Contacts';
			break;
		case SCREENS.ALBUM:
			headerName = 'Mes photos';
			break;
		case SCREENS.SMS_CONVERSATION:
		case SCREENS.CONTACTS_DETAILS:
			headerName = true;
			break;
		default:
			break;
	}

	return headerName;
};

const getBodyColor = (screen) => {
	const { black, charcoal, ghostWhite, slateBlue, white } = colors;
	let bodyColor = ghostWhite;

	switch (screen) {
		case SCREENS.SPLASH:
			bodyColor = black;
			break;
		case SCREENS.WARNING:
			bodyColor = slateBlue;
			break;
		case SCREENS.INTRO:
			bodyColor = charcoal;
			break;
		case SCREENS.EMAIL:
		case SCREENS.EMAIL_LOGIN:
		case SCREENS.EMAIL_DETAILS:
			bodyColor = white;
			break;
		default:
			break;
	}

	return bodyColor;
};

const getBodyAddtionalStyle = (screen) => {
	let additionalStyle = null;

	switch (screen) {
		default:
			break;
	}

	return additionalStyle;
};

const SCREENS_INFO = Object.entries(SCREENS).map((screen) => {
	const [constantName, displayName] = screen;
	const headerName = getHeaderName(displayName);
	const bodyColor = getBodyColor(displayName);
	const bodyAdditionalStyle = getBodyAddtionalStyle(displayName);

	return {
		constantName,
		displayName,
		headerName,
		bodyColor,
		bodyAdditionalStyle,
	};
});

export { SCREENS, SCREENS_INFO };

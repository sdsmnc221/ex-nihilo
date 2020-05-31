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

const SCREENS_INFO = Object.entries(SCREENS).map((screen) => {
	const [key, value] = screen;
	let headerName = false;

	switch (value) {
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

	return {
		constantName: key,
		displayName: value,
		headerName,
	};
});

export { SCREENS, SCREENS_INFO };

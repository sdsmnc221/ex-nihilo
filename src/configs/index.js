import Config from 'react-native-config';

const ALL_APPS = [
	{ label: 'Contacts', iconType: 'CONTACTS', screen: 'ContactsScreen' },
	{ label: 'Mail', iconType: 'EMAIL', screen: 'EmailLoginScreen' },
	{ label: 'Messages', iconType: 'SMS', screen: 'SmsScreen', notifs: 24 },
	{ label: 'Internet', iconType: 'BROWSER', screen: 'InternetScreen' },
	{ label: 'Mes Notes', iconType: 'NOTES' },
	{ label: 'Calendrier', iconType: 'CALENDAR' },
	{ label: 'Appels', iconType: 'PHONE', notifs: 8 },
	{ label: 'Galerie', iconType: 'ALBUM', screen: 'AlbumScreen' },
	{ label: 'Facebook', iconType: 'FACEBOOK', screen: 'FacebookLoginScreen' },
	{ label: 'Calculatrice' },
	{ label: 'Appareil Photo' },
	{ label: 'Instagram' },
	{ label: 'Paramètres' },
	{ label: 'Fichiers' },
	{ label: 'End Screen', screen: 'TypoScreen' },
];

const HOME_APPS = [
	{ label: 'Appels', iconType: 'PHONE', notifs: 8 },
	{ label: 'Messages', iconType: 'SMS', screen: 'SmsScreen', notifs: 24 },
	{ label: 'AllApps', iconType: 'APPS', screen: 'AllApps' },
	{ label: 'Contacts', iconType: 'CONTACTS', screen: 'ContactsScreen' },
	{ label: 'Galerie', iconType: 'ALBUM', screen: 'AlbumScreen' },
];

const {
	LOCALE,
	GOOGLE_MAPS_API_KEY,
	URL_WIKIHOW,
	URL_INFO_DATA,
	URL_ABOUT_US,
	KEY_PUZZLE_A,
	KEY_PUZZLE_B,
	KEY_PUZZLE_C,
	KEY_PUZZLE_D,
} = Config;

export {
	ALL_APPS,
	HOME_APPS,
	LOCALE,
	GOOGLE_MAPS_API_KEY,
	URL_WIKIHOW,
	URL_INFO_DATA,
	URL_ABOUT_US,
	KEY_PUZZLE_A,
	KEY_PUZZLE_B,
	KEY_PUZZLE_C,
	KEY_PUZZLE_D,
};

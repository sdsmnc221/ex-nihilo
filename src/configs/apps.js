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
	{ label: 'Apps', iconType: 'APPS', screen: 'AllAppsScreen' },
	{ label: 'Contacts', iconType: 'CONTACTS', screen: 'ContactsScreen' },
	{ label: 'Galerie', iconType: 'ALBUM', screen: 'AlbumScreen' },
];

export { ALL_APPS, HOME_APPS };

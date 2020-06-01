import { SCREENS } from './screens';

const ALL_APPS = [
	{ label: 'Contacts', iconType: 'CONTACTS', screen: SCREENS.CONTACTS },
	{ label: 'Mail', iconType: 'EMAIL', screen: SCREENS.EMAIL_LOGIN },
	{ label: 'Messages', iconType: 'SMS', screen: SCREENS.SMS, notifs: 24 },
	{ label: 'Internet', iconType: 'BROWSER', screen: SCREENS.INTERNET },
	{ label: 'Mes Notes', iconType: 'NOTES' },
	{ label: 'Calendrier', iconType: 'CALENDAR' },
	{ label: 'Appels', iconType: 'PHONE', notifs: 8 },
	{ label: 'Galerie', iconType: 'ALBUM', screen: SCREENS.ALBUM },
	{ label: 'Facebook', iconType: 'FACEBOOK', screen: SCREENS.FACEBOOK_LOGIN },
	{ label: 'Calculatrice' },
	{ label: 'Appareil Photo' },
	{ label: 'Instagram' },
	{ label: 'Paramètres' },
	{ label: 'Fichiers' },
	{ label: 'End Screen', screen: SCREENS.END_MENU },
];

const HOME_APPS = [
	{ label: 'Appels', iconType: 'PHONE', notifs: 8 },
	{ label: 'Messages', iconType: 'SMS', screen: SCREENS.SMS, notifs: 24 },
	{ label: 'Apps', iconType: 'APPS', screen: SCREENS.ALL_APPS },
	{ label: 'Contacts', iconType: 'CONTACTS', screen: SCREENS.CONTACTS },
	{ label: 'Galerie', iconType: 'ALBUM', screen: SCREENS.ALBUM },
];

export { ALL_APPS, HOME_APPS };

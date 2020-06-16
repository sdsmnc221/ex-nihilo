import { SCREENS } from './screens';
import { resetSmsNotifs } from 'states/actions/mergedDataActions';

const ALL_APPS = [
	{ label: 'Contacts', iconType: 'CONTACTS', screen: SCREENS.CONTACTS },
	{
		label: 'Mail',
		iconType: 'EMAIL',
		screen: SCREENS.EMAIL_LOGIN,
		screenUnlock: SCREENS.EMAIL,
		notifs: 'emailsNotifications',
	},
	{
		label: 'Messages',
		iconType: 'SMS',
		screen: SCREENS.SMS,
		notifs: 'smsNotifications',
		onPress: (dispatch) => resetSmsNotifs(dispatch),
	},
	{ label: 'Internet', iconType: 'BROWSER', screen: SCREENS.INTERNET },
	{ label: 'Mes Notes', iconType: 'NOTES' },
	{ label: 'Calendrier', iconType: 'CALENDAR' },
	{ label: 'Appels', iconType: 'PHONE', notifs: 6 },
	{ label: 'Galerie', iconType: 'ALBUM', screen: SCREENS.ALBUM },
	{ label: 'Facebook', iconType: 'FACEBOOK', screen: SCREENS.FACEBOOK_LOGIN },
	{ label: 'Calculatrice' },
	{ label: 'Appareil Photo' },
	{ label: 'Instagram' },
	{ label: 'Paramètres' },
	{ label: 'Fichiers' },
	{ label: 'E-Store' },
	// { label: 'E-Store', screen: SCREENS.END_MENU },
	// { label: 'JANUS', screen: SCREENS.JANUS },
];

const HOME_APPS = [
	{ label: 'Appels', iconType: 'PHONE', notifs: 6 },
	{
		label: 'Messages',
		iconType: 'SMS',
		screen: SCREENS.SMS,
		notifs: 'smsNotifications',
		onPress: (dispatch) => resetSmsNotifs(dispatch),
	},
	{ label: 'Apps', iconType: 'APPS', screen: SCREENS.ALL_APPS },
	{ label: 'Contacts', iconType: 'CONTACTS', screen: SCREENS.CONTACTS },
	{ label: 'Galerie', iconType: 'ALBUM', screen: SCREENS.ALBUM },
];

const CONTACT_DETAILS_APPS = [
	{ label: 'Appels', iconType: 'PHONE' },
	{ label: 'Messages', iconType: 'SMS' },
	{ label: 'Mail', iconType: 'EMAIL' },
];

export { ALL_APPS, HOME_APPS, CONTACT_DETAILS_APPS };

import { device } from 'utils';
import { HEADER_OPTIONS } from 'sharedUI/Header/configs';

import dataEmailContentTypes from 'data/json/emailContentTypes.json';
import dataSmsActionTypes from 'data/json/smsActionTypes.json';

const { width: deviceW, height: deviceH } = device();

const NUMBERS = {
	ALBUM_COLS: 3,
	ALBUM_DEVICE_PHOTOS: 36,
	DEVICE_SMS: 6,
	RESET_PRESS_DURATION: 120,
	RESET_PRESS_DURATION_ALBUM: 12,
	RESET_ACTION_SMS_DURATION: 1200,
	GLITCH_INTERVAL: 120,
	GLITCH_XS: 2,
	GLITCH_XL: 20,
	UNLOCK_EMAIL_DELAY: 2000,
	JANUS_SMS_DELAY: 120,
	JANUS_APPEARS_DELAY_SECS: 2000,
	JANUS_APPEARS_DELAY_MINUTES: 0.5,
	END_MENU_APPEARS_DELAY: 640,
};

const APP_ICON = {
	ICONS_TRAY_WIDTH: 90,
	ICONS_TRAY_WIDTH_NB: 0.9,
	ICONS_TRAY_MARGE: 12,
	ICONS_COUNT: 5,
	ICON_MARGE: 12,
	RATIO: 0.9,
};

const FLEX = {
	JUSTIFY_CONTENT: 'center',
	ALIGN_ITEMS: 'center',
	FLEX_DIRECTION: 'column',
};

const HEADER_H = deviceH * HEADER_OPTIONS.minHeight;
const HEADER_H_GAP = HEADER_H + HEADER_OPTIONS.extraGap;

const SIZES = {
	NAV_BAR_H: 50,
	STT_BAR_H: 30,
	HEADER_H,
	HEADER_H_GAP,
	HEADER_SEARCH_BAR: {
		W: deviceW * 0.75,
		H: 30,
		R: 30,
	},
	HEADER_BACK_H: 50,
	SMS_INPUT_H: 48,
	ALBUM_PHOTO: deviceW / NUMBERS.ALBUM_COLS,
	ALBUM_LOCK_H: deviceH - HEADER_H_GAP,
	DATAVIZ: {
		W: deviceW,
		H: deviceH * 0.68,
		H_SHRINK: deviceH * 0.56,
		w: deviceW * 0.8,
		h: deviceH * 0.4,
	},
	DATAVIZ_TAB_BAR: {
		W: deviceW * 0.9,
		H: 36,
	},
};

const EMAIL_CONTENT_TYPES = {};

dataEmailContentTypes.forEach(
	(type) => (EMAIL_CONTENT_TYPES[type.toUpperCase()] = type)
);

const SMS_ACTION_TYPES = {};

dataSmsActionTypes.forEach(
	(type) => (SMS_ACTION_TYPES[type.toUpperCase()] = type)
);

const STRINGS = {
	CONTACT_INFO: [
		{ title: 'Mobile', key: 'phoneNumber' },
		{ title: 'Email', key: 'email' },
		{ title: 'Date de naissance', key: 'dob' },
		{ title: 'Adresse', key: 'address' },
	],
	DATAVIZ_TAB_BAR: [
		{ label: 'SMS', color: 'slateBlue' },
		{ label: 'Photos', color: 'lime' },
		{ label: 'Contacts', color: 'neonCarrot' },
		{ label: 'Appels', color: 'electricIndigo' },
	],
	DATAVIZ_TAB_TEXT: {
		nullText:
			'Grâce à vos permissions, nous avons accès à plusieurs de vos données personnelles, parmi lesquelles voici 4 catégories particulières.\nCliquez sur chaque catégorie pour la découvrir.',
		primaryInfoStart: 'Nous avons accès à ',
		primaryInfoEnd: ' sur votre téléphone. ',
		secondaryInfoStart: 'En moyenne un utilisateur stock ',
		secondaryInfoEnd: ' sur leur téléphone.',
		info: [
			{ label: 'SMS', secondary: 3339, secondarySuffix: ' chaque mois' },
			{ label: 'photos', secondary: 630 },
			{ label: 'contacts', secondary: 611 },
			{ label: 'appels', secondary: 250, secondarySuffix: ' chaque mois' },
		],
	},
	DATAVIZ_EVENT_TYPES: {
		REACT_NATIVE_INFO: 'update_REACT_NATIVE_INFO',
		SET_ACTIVE_TYPE: 'set_ACTIVE_TYPE',
	},
	ICON_PRESSED: '_PRESSED',
	ARROW: {
		UP: 'ARROW_UP',
		DOWN: 'ARROW_DOWN',
	},
	EMAIL_CONTENT_TYPES,
	SMS_ACTION_TYPES,
	JANUS_VOICE: () => require('../assets/sound/JANUS_VOICE.mp4'),
};

export { APP_ICON, FLEX, NUMBERS, SIZES, STRINGS };

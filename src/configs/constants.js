import { device } from 'utils';
import { HEADER_OPTIONS } from 'sharedUI/Header/configs';

import dataEmailContentTypes from 'data/json/emailContentTypes.json';

const NUMBERS = {
	ALBUM_COLS: 3,
	ALBUM_DEVICE_PHOTOS: 37,
	RESET_PRESS_DURATION: 120,
	RESET_PRESS_DURATION_ALBUM: 12,
	JANUS_SMS_DELAY: 12,
	JANUS_APPEARS_DELAY_MINUTES: 1,
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

const HEADER_H = device().height * HEADER_OPTIONS.minHeight;
const HEADER_H_GAP = HEADER_H + HEADER_OPTIONS.extraGap;

const SIZES = {
	NAV_BAR_H: 50,
	STT_BAR_H: 30,
	HEADER_H,
	HEADER_H_GAP,
	HEADER_SEARCH_BAR: {
		W: device().width * 0.75,
		H: 30,
		R: 30,
	},
	HEADER_BACK_H: 50,
	SMS_INPUT_H: 48,
	ALBUM_PHOTO: device().width / NUMBERS.ALBUM_COLS,
	ALBUM_LOCK_H: device().height - HEADER_H_GAP,
};

const EMAIL_CONTENT_TYPES = {};

dataEmailContentTypes.forEach(
	(type) => (EMAIL_CONTENT_TYPES[type.toUpperCase()] = type)
);

const STRINGS = {
	CONTACT_INFO: [
		{ title: 'Mobile', key: 'phoneNumber' },
		{ title: 'Email', key: 'email' },
		{ title: 'Date de naissance', key: 'dob' },
		{ title: 'Adresse', key: 'address' },
	],
	ICON_PRESSED: '_PRESSED',
	EMAIL_CONTENT_TYPES,
};

export { APP_ICON, FLEX, NUMBERS, SIZES, STRINGS };

import { device } from 'utils';

const NUMBERS = {
	ALBUM_COLS: 3,
};

const APP_ICON = {
	ICONS_TRAY_WIDTH: 90,
	ICONS_TRAY_WIDTH_NB: 0.9,
	ICONS_TRAY_MARGE: 12,
	ICONS_COUNT: 5,
	ICON_MARGE: 12,
	RATIO: 0.9,
	RESET_PRESS_DURATION: 120,
};

const FLEX = {
	JUSTIFY_CONTENT: 'center',
	ALIGN_ITEMS: 'center',
	FLEX_DIRECTION: 'column',
};

const SIZES = {
	NAV_BAR_H: 50,
	STT_BAR_H: 30,
	ALBUM_PHOTO: device().width / NUMBERS.ALBUM_COLS,
};

const STRINGS = {
	ICON_PRESSED: '_PRESSED',
};

export { APP_ICON, FLEX, NUMBERS, SIZES, STRINGS };

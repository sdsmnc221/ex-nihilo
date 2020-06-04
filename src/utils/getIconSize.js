import { device } from 'utils';
import { APP_ICON } from 'configs';

const getIconSize = () => {
	const { width: deviceW } = device();
	const {
		ICONS_TRAY_WIDTH_NB,
		ICONS_TRAY_MARGE,
		ICONS_COUNT,
		ICON_MARGE,
		RATIO,
	} = APP_ICON;

	return (
		((deviceW * ICONS_TRAY_WIDTH_NB - ICONS_TRAY_MARGE * 2) / ICONS_COUNT -
			ICON_MARGE) *
		RATIO
	);
};

export default getIconSize;

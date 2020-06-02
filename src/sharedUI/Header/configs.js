import { SCREENS, SCREENS_INFO } from 'configs';

const DEFAULT_HEADER_OPTIONS = {
	headerShown: false,
};

const HEADER_OPTIONS = {
	minHeight: 0.12,
	padding: {
		left: 30,
		right: 12,
	},
};

const HEADER_TYPES = {
	BASIC: 'basic',
	DARK: 'dark',
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
		case SCREENS.DATAVIZ:
			headerName = 'Mon ADN numérique';
			break;
		case SCREENS.DATA_PROTECTION:
			headerName = 'Protéger ses données';
			break;
		case SCREENS.ABOUT_US:
			headerName = 'En savoir plus';
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

const getHeaderType = (screen) => {
	let headerType = HEADER_TYPES.BASIC;

	switch (screen) {
		case SCREENS.DATAVIZ:
		case SCREENS.DATA_PROTECTION:
		case SCREENS.ABOUT_US:
			headerType = HEADER_TYPES.DARK;
			break;
		default:
			break;
	}

	return headerType;
};

const getHeaderExtra = (screen) => {
	let headerLeft = false,
		headerRight = false;

	switch (screen) {
		case SCREENS.SMS:
			headerRight = true;
			break;
		default:
			break;
	}

	return { headerLeft, headerRight };
};

const getHeaderConfigs = (screen) => {
	const screenInfo = SCREENS_INFO.find((s) => screen === s.displayName);
	let configs = {};

	if (screenInfo) {
		const {
			constantName: screenConstantName,
			displayName: screenDisplayName,
		} = screenInfo;
		const headerName = getHeaderName(screenDisplayName);
		const headerType = getHeaderType(screenDisplayName);
		const headerExtra = getHeaderExtra(screenDisplayName);

		configs = {
			header: !!headerName,
			headerConfigs: {
				...(typeof headerName === 'string'
					? {
							screen: screenConstantName,
							title: headerName,
							type: headerType,
							...headerExtra,
					  }
					: {}),
			},
		};
	}

	return configs;
};

export { DEFAULT_HEADER_OPTIONS, HEADER_OPTIONS, HEADER_TYPES };

export default getHeaderConfigs;

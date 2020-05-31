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

const getHeaderConfigs = (screen) => {
	const screenInfo = SCREENS_INFO.find((s) => screen === s.displayName);
	let configs = {};

	if (screenInfo) {
		const { headerName } = screenInfo;

		switch (screen) {
			case SCREENS.SMS:
				configs = {
					header: !!headerName,
					headerConfigs: {
						...(typeof headerName === 'string' ? { title: headerName } : {}),
					},
				};
				break;
			default:
				break;
		}
	}

	return configs;
};

export { DEFAULT_HEADER_OPTIONS, HEADER_OPTIONS };

export default getHeaderConfigs;

import React from 'react';
import { withTheme } from 'styled-components';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import WebScreen from 'sharedUI/WebScreen';

import { URL_INFO_DATA, STRINGS } from 'configs';

const DataProtectionScreen = ({ route, theme }) => (
	<LayoutWrapper screenName={route.name}>
		<WebScreen
			url={URL_INFO_DATA}
			bodyColor={theme.colors.black}
			injectedJavaScript={STRINGS.WEBVIEW_GAP_SCRIPT(4)}
		/>
	</LayoutWrapper>
);

export default withTheme(DataProtectionScreen);

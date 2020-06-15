import React from 'react';
import { withTheme } from 'styled-components';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import WebScreen from 'sharedUI/WebScreen';

import { URL_ABOUT_US, STRINGS } from 'configs';

const AboutUsScreen = ({ route, theme }) => (
	<LayoutWrapper screenName={route.name}>
		<WebScreen
			url={URL_ABOUT_US}
			bodyColor={theme.colors.black}
			injectedJavaScript={STRINGS.WEBVIEW_GAP_SCRIPT(4)}
		/>
	</LayoutWrapper>
);

export default withTheme(AboutUsScreen);

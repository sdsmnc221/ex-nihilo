import React from 'react';
import { withTheme } from 'styled-components';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import WebScreen from 'sharedUI/WebScreen';

import { URL_ABOUT_US } from 'configs';

const AboutUsScreen = ({ route, theme }) => (
	<LayoutWrapper screenName={route.name}>
		<WebScreen url={URL_ABOUT_US} bodyColor={theme.colors.black} />
	</LayoutWrapper>
);

export default withTheme(AboutUsScreen);

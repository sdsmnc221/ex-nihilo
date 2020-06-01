import React from 'react';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import WebScreen from 'sharedUI/WebScreen';

import { URL_ABOUT_US } from 'configs';

const AboutUsScreen = ({ route }) => (
	<LayoutWrapper screenName={route.name}>
		<WebScreen url={URL_ABOUT_US} />
	</LayoutWrapper>
);

export default AboutUsScreen;

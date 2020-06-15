import React from 'react';
import { View, Text } from 'react-native';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import WebScreen from 'sharedUI/WebScreen';

import { URL_WIKIHOW, STRINGS } from 'configs';

const InternetScreen = ({ route }) => (
	<LayoutWrapper screenName={route.name}>
		<WebScreen
			url={URL_WIKIHOW}
			injectedJavaScript={STRINGS.WEBVIEW_GAP_SCRIPT()}
		/>
	</LayoutWrapper>
);

export default InternetScreen;

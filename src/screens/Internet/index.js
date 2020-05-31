import React from 'react';
import { withTheme } from 'styled-components';
import { View, Text } from 'react-native';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import WebScreen from 'sharedUI/WebScreen';
import NavigationBar from 'sharedUI/NavigationBar';

import { URL_WIKIHOW, SCREENS } from 'configs';

const InternetScreen = ({ theme }) => (
	<LayoutWrapper screenName={SCREENS.INTERNET}>
		<View
			css={`
				${theme.styles.body()}
			`}>
			<WebScreen url={URL_WIKIHOW} />
			<NavigationBar transparentButtons />
		</View>
	</LayoutWrapper>
);
export default withTheme(InternetScreen);

import React from 'react';
import { withTheme } from 'styled-components';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import WebScreen from '../../sharedUI/WebScreen';
import NavigationBar from 'sharedUI/NavigationBar';

import { URL_WIKIHOW } from 'configs';

const InternetScreen = ({ navigation, theme }) => (
	<SafeAreaView>
		<View
			css={`
				${theme.styles.body()}
			`}>
			<WebScreen url={URL_WIKIHOW} />
			<NavigationBar onPressHome={() => navigation.navigate('HomeScreen')} black />
		</View>
	</SafeAreaView>
);
export default withTheme(InternetScreen);

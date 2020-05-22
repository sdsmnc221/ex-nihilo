import React, { useEffect } from 'react';
import styled, { withTheme } from 'styled-components';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Icon from 'sharedUI/Icon';

const Loader = styled.Text`
	margin-top: 50px;
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.cairo.light};
	font-size: 15px;
	letter-spacing: 0.75px;
`;

const SplashScreen = ({ navigation, theme }) => {
	useEffect(() => {
		setTimeout(() => navigation.navigate('WarningScreen'), 3200);
	}, [navigation]);

	return (
		<SafeAreaView
			css={`
				${theme.styles.body(theme.colors.black)}
			`}>
			<Icon type="LOGO" />
			<Loader>loading</Loader>
		</SafeAreaView>
	);
};

export default withTheme(SplashScreen);

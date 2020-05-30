import React, { useEffect } from 'react';
import styled, { withTheme } from 'styled-components';
import { Text, View } from 'react-native';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
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
		<LayoutWrapper>
			<View
				css={`
					${theme.styles.body(theme.colors.black)}
				`}>
				<Icon type="LOGO" />
				<Loader>loading</Loader>
			</View>
		</LayoutWrapper>
	);
};

export default withTheme(SplashScreen);

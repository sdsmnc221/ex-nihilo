import React, { useEffect } from 'react';
import styled from 'styled-components';
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

const SplashScreen = ({ route, navigation }) => {
	useEffect(() => {
		setTimeout(() => navigation.navigate('WarningScreen'), 3200);
	}, [navigation]);

	return (
		<LayoutWrapper screenName={route.name}>
			<Icon type="LOGO" />
			<Loader>loading</Loader>
		</LayoutWrapper>
	);
};

export default SplashScreen;

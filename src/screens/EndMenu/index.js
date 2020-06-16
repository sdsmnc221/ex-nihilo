import React from 'react';
import styled, { css } from 'styled-components';
import { Text, View } from 'react-native';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import FlatButton from 'sharedUI/Button/FlatButton';
import Dataviz from 'screens/Dataviz/components/Dataviz';

import { SCREENS, SIZES } from 'configs';

const Title = styled.Text`
	margin: 32px 0;
	color: ${({ theme }) => theme.colors.white};
	${({ theme }) => theme.styles.dataviz.title}
`;

const EndMenuScreen = ({ route, navigation }) => {
	const { w, h } = SIZES.DATAVIZ;
	const onPress = (screen) => navigation.navigate(screen);

	const MENU = [
		{
			text: 'Mon ADN numérique',
			screen: SCREENS.DATAVIZ,
		},
		{
			text: 'Protéger ses données',
			screen: SCREENS.DATA_PROTECTION,
		},
		{
			text: 'En savoir plus',
			screen: SCREENS.ABOUT_US,
		},
	];

	return (
		<LayoutWrapper screenName={route.name}>
			<Dataviz
				width={w}
				height={h}
				doNotRunScript={route.params?.doNotRunScript}
			/>
			<Title>Menu</Title>
			{MENU.map((button, index) => (
				<FlatButton
					key={index}
					dataviz
					text={button.text}
					additionalStyle={css`
						width: 54%;
						margin-bottom: 12px;
					`}
					pressHandler={() => onPress(button.screen)}
				/>
			))}
		</LayoutWrapper>
	);
};

export default EndMenuScreen;

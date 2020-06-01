import React from 'react';
import styled, { css } from 'styled-components';
import { Text, View, Image } from 'react-native';

import DATAVIZ_PLACEHOLDER from 'assets/images/Dataviz-EndMenuScreen.png';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import FlatButton from 'sharedUI/Button/FlatButton';

const Title = styled.Text`
	margin: 32px 0;
	color: ${({ theme }) => theme.colors.white};
	${({ theme }) => theme.styles.dataviz.endMenuTitle}
`;

const styledFlatButton = css`
	width: 60%;
	margin-bottom: 12px;
`;

const EndMenuScreen = ({ route, navigation }) => {
	const onPress = () => {};

	const MENU = [
		{
			text: 'Mon ADN Numérique',
			pressHandler: onPress,
		},
		{
			text: 'Protéger ses données',
			pressHandler: onPress,
		},
		{
			text: 'En savoir plus',
			pressHandler: onPress,
		},
	];

	return (
		<LayoutWrapper screenName={route.name}>
			<Image
				css={`
					${css`
						width: 240px;
						height: 240px;
					`}
				`}
				source={DATAVIZ_PLACEHOLDER}
				resizeMode="contain"
			/>
			<Title>Menu</Title>
			{MENU.map((button, index) => (
				<FlatButton
					key={index}
					text={button.text}
					additionalStyle={`${styledFlatButton}`}
					pressHandler={button.pressHandler}
				/>
			))}
		</LayoutWrapper>
	);
};

export default EndMenuScreen;

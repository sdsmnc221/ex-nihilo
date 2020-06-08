import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { View, Text } from 'react-native-animatable';

import { TouchableOpacity } from 'react-native-gesture-handler';

import { SIZES, STRINGS } from 'configs';

const { DATAVIZ_TAB_BAR: TAB_BAR_SIZE } = SIZES;
const { DATAVIZ_TAB_BAR: TAB_BAR_CONTENT } = STRINGS;

const Wrapper = styled.View`
	width: ${TAB_BAR_SIZE.W}px;
	height: ${TAB_BAR_SIZE.H}px;
	margin-top: 20px;
	flex-direction: row;
	align-self: center;
	border-radius: 50px;
	background-color: ${({ theme }) => theme.colors.white};
`;

const Button = styled.TouchableOpacity`
	width: ${100 / TAB_BAR_CONTENT.length}%;
	height: 100%;
	background-color: transparent;
	${({ theme }) => theme.styles.flexWithoutSize()};
`;

const ButtonText = styled.Text`
	color: ${({ theme }) => theme.colors.dimGray};
	letter-spacing: 0.27px;
	${({ theme }) => theme.styles.dataviz.tab}
`;

const TabBar = ({ theme }) => {
	const [buttonPressed, setButtonPressed] = useState(false);

	const onPress = () => setButtonPressed(!buttonPressed);

	useEffect(() => {
		if (buttonPressed) {
			setButtonPressed(false);
		}
	}, [buttonPressed]);

	return (
		<Wrapper>
			{TAB_BAR_CONTENT.map((tab, i) => (
				<Button key={i} activeOpacity={0.8}>
					<ButtonText>{tab.label}</ButtonText>
				</Button>
			))}
		</Wrapper>
	);
};

TabBar.propTypes = {};

TabBar.defaultProps = {};

export default withTheme(TabBar);

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text } from 'react-native-animatable';

import { TouchableOpacity } from 'react-native-gesture-handler';

import { SIZES, STRINGS } from 'configs';
import { setTabIndex } from '../../../states/actions/datavizAction';

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
	border-radius: 50px;
	background-color: ${({ active, colorKey, theme }) =>
		active ? theme.colors[colorKey] : 'transparent'};
	${({ theme }) => theme.styles.flexWithoutSize()};
`;

const ButtonText = styled.Text`
	color: ${({ active, theme }) =>
		active ? theme.colors.white : theme.colors.dimGray};
	letter-spacing: 0.27px;
	${({ theme }) => theme.styles.dataviz.tab}
`;

const TabBar = () => {
	const dispatch = useDispatch();

	const { tabIndex } = useSelector((state) => state.dataviz);

	const [buttonPressed, setButtonPressed] = useState(false);

	const onPress = (index) => {
		setButtonPressed(!buttonPressed);
		setTabIndex(dispatch, index);
	};

	useEffect(() => {
		if (buttonPressed) {
			setButtonPressed(false);
		}
	}, [buttonPressed]);

	return (
		<Wrapper>
			{TAB_BAR_CONTENT.map((tab, i) => (
				<Button
					key={i}
					onPress={() => onPress(i)}
					activeOpacity={0.8}
					active={i === tabIndex}
					colorKey={tab.color}>
					<ButtonText active={i === tabIndex}>{tab.label}</ButtonText>
				</Button>
			))}
		</Wrapper>
	);
};

export default TabBar;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { tick } from 'utils';
import { NUMBERS } from 'configs';

const Button = styled.TouchableOpacity`
	width: 50px;
	height: 50px;
	border-radius: 50px;
	border: 1px solid
		${({ theme, borderColor }) => borderColor || theme.colors.white};
	background-color: ${({
		active,
		theme,
		activeButtonColor,
		inactiveButtonColor,
	}) =>
		active ? activeButtonColor || theme.colors.white : inactiveButtonColor};
	${({ theme }) => theme.styles.flexWithoutSize()}
`;

const ButtonText = styled.Text`
	color: ${({ active, theme, activeTextColor, inactiveTextColor }) =>
		active
			? activeTextColor || theme.colors.charcoal
			: inactiveTextColor || theme.colors.white};
	text-align: center;
	${({ dataviz, theme }) =>
		dataviz ? theme.styles.dataviz.body : theme.styles.os.boldBody}
`;

const FlatButton = ({
	dataviz,
	text,
	pressHandler,
	additionalStyle,
	borderColor,
	inactiveButtonColor,
	inactiveTextColor,
	activeButtonColor,
	activeTextColor,
}) => {
	const [buttonPressed, setButtonPressed] = useState(false);

	const onPress = () => setButtonPressed(!buttonPressed);

	useEffect(() => {
		if (buttonPressed) {
			pressHandler();
			tick(() => setButtonPressed(false), NUMBERS.RESET_PRESS_DURATION);
		}
	}, [buttonPressed, pressHandler]);

	return (
		<Button
			onPress={onPress}
			active={buttonPressed}
			activeOpacity={0.8}
			borderColor={borderColor}
			inactiveButtonColor={inactiveButtonColor}
			activeButtonColor={activeButtonColor}
			css={additionalStyle}>
			<ButtonText
				dataviz={dataviz}
				active={buttonPressed}
				inactiveTextColor={inactiveTextColor}
				activeTextColor={activeTextColor}>
				{text}
			</ButtonText>
		</Button>
	);
};

FlatButton.propTypes = {
	dataviz: PropTypes.bool,
	text: PropTypes.string.isRequired,
	pressHandler: PropTypes.func,
	additionalStyle: PropTypes.string,
	borderColor: PropTypes.string,
	inactiveButtonColor: PropTypes.string,
	inactiveTextColor: PropTypes.string,
	activeButtonColor: PropTypes.string,
	activeTextColor: PropTypes.string,
};

FlatButton.defaultProps = {
	dataviz: false,
	pressHandler: () => {},
	additionalStyle: null,
	borderColor: null,
	inactiveButtonColor: 'transparent',
	inactiveTextColor: null,
	activeButtonColor: null,
	activeTextColor: null,
};

export default FlatButton;

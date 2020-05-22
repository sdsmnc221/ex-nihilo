import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Button = styled.TouchableOpacity`
	width: 50px;
	height: 50px;
	border-radius: 50px;
	border: 1px solid ${({ theme }) => theme.colors.white};
	background-color: ${({ active, theme }) =>
		active ? theme.colors.white : 'transparent'};
	${({ theme }) => theme.styles.flex()}
`;

const ButtonText = styled.Text`
	color: ${({ active, activeTextColor, theme }) =>
		active ? activeTextColor || theme.colors.charcoal : theme.colors.white};
	text-align: center;
	${({ theme }) => theme.styles.os.boldBody}
`;

const FlatButton = ({
	text,
	pressHandler,
	additionalStyle,
	activeTextColor,
}) => {
	const [buttonPressed, setButtonPressed] = useState(false);

	const onPress = () => setButtonPressed(!buttonPressed);

	useEffect(() => {
		if (buttonPressed) {
			setTimeout(() => pressHandler(), 32);
		}
	}, [buttonPressed, pressHandler]);

	return (
		<Button
			onPress={onPress}
			active={buttonPressed}
			activeOpacity={0.8}
			css={additionalStyle}>
			<ButtonText active={buttonPressed} activeTextColor={activeTextColor}>
				{text}
			</ButtonText>
		</Button>
	);
};

FlatButton.propTypes = {
	text: PropTypes.string.isRequired,
	pressHandler: PropTypes.func,
	additionalStyle: PropTypes.string,
	activeTextColor: PropTypes.string,
};

FlatButton.defaultProps = {
	ellipse: false,
	pressHandler: () => {},
	additionalStyle: null,
	activeTextColor: null,
};

export default FlatButton;

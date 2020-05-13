import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'sharedUI/Icon';

import { colors, fonts, shadows } from 'configs/theme';
import typo from 'configs/typo';

const Wrapper = styled.View`
	width: 100%;
	height: 100%;
	/* margin-top: 100%; */
	justify-content: center;
	align-items: center;
`;

const IconWrapper = styled.View`
	margin-bottom: 32px;
`;

const Title = styled.Text`
	margin-bottom: 12px;
	${typo.os.h2}
	color: ${colors.whiskey};
`;

const Input = styled.TextInput`
	width: 60%;
	height: 60px;
	padding: 0 24px;
	border-radius: 50px;
	background-color: ${colors.ghostWhite};
	color: ${colors.charcoal};
	${typo.os.body}
`;

const Hint = styled.Text`
	width: 60%;
	margin-top: 12px;
	font-family: ${fonts.sourceSans.light};
	font-size: 12px;
	letter-spacing: 0.15px;
	text-align: center;
	opacity: 0.6;
	color: ${({ color }) => color};
`;

const Button = styled.TouchableOpacity`
	background-color: ${({ active }) => (active ? colors.whiskey : colors.white)};
	border: 1px solid ${colors.whiskey};
	border-radius: 50px;
	width: 50px;
	height: 50px;
	justify-content: center;
	align-items: center;
	margin-top: 24px;
`;

const ButtonText = styled.Text`
	color: ${({ active }) => (active ? colors.white : colors.whiskey)};
	font-family: ${fonts.cairo.semiBold};
	font-size: 15px;
	letter-spacing: 0.75px;
	text-align: center;
`;

const PasswordLock = ({
	noLockIcon,
	submitButton,
	hintEnabled,
	hint,
	color,
	passwordInput,
	onInputPassword,
	onSubmitPassword,
}) => {
	const [buttonPressed, setButtonPressed] = useState(false);

	const onPress = () => setButtonPressed(!buttonPressed);

	useEffect(() => {
		if (buttonPressed) {
			setTimeout(() => onSubmitPassword(), 60);
		}
	}, [buttonPressed, onSubmitPassword]);

	return (
		<Wrapper>
			{!noLockIcon && (
				<IconWrapper>
					<Icon type="LOCK" color={color} />
				</IconWrapper>
			)}
			<Title>Mot de passe</Title>
			<Input
				secureTextEntry
				blurOnSubmit
				onChangeText={onInputPassword}
				onSubmitEditing={onSubmitPassword}
				value={passwordInput}
				style={shadows.default}
			/>
			{hintEnabled && <Hint color={color}>{hint}</Hint>}
			{submitButton && (
				<Button onPress={onPress} active={buttonPressed} activeOpacity={0.8}>
					<ButtonText active={buttonPressed}>ok</ButtonText>
				</Button>
			)}
		</Wrapper>
	);
};

PasswordLock.propTypes = {
	noLockIcon: PropTypes.bool,
	submitButton: PropTypes.bool,
	hintEnabled: PropTypes.bool,
	hint: PropTypes.string,
	color: PropTypes.string,
	passwordInput: PropTypes.string,
	onInputPassword: PropTypes.func,
	onSubmitPassword: PropTypes.func,
};

PasswordLock.defaultProps = {
	noLockIcon: false,
	submitButton: false,
	hint: undefined,
	color: '#000',
	passwordInput: '',
	onInputPassword: () => {},
	onSubmitPassword: () => {},
};

export default PasswordLock;

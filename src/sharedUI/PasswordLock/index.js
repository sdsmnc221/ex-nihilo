import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Icon from 'sharedUI/Icon';
import FlatButton from 'sharedUI/Button/FlatButton';

const Wrapper = styled.View`
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
`;

const IconWrapper = styled.View`
	margin-bottom: 32px;
`;

const Title = styled.Text`
	margin-bottom: 20px;
	color: ${({ theme }) => theme.colors.whiskey};
	${({ theme }) => theme.styles.os.h2}
`;

const Input = styled.TextInput`
	width: 64%;
	height: 60px;
	padding: 14px 26px;
	border-radius: 50px;
	border: 1px solid
		${({ theme, isFocused, passwordValid, passwordSubmitted }) =>
			passwordValid
				? theme.colors.lime
				: !isFocused || (isFocused && !passwordSubmitted)
				? 'transparent'
				: theme.colors.cinnabar};
	background-color: ${({ theme }) => theme.colors.ghostWhite};
	color: ${({ theme }) => theme.colors.dimGray};
	${({ theme }) => theme.styles.os.body};
`;

const Hint = styled.Text`
	width: 60%;
	margin-top: 20px;
	margin-bottom: 24px;
	font-family: ${(theme) => theme.fonts.sourceSans.light};
	font-size: 12px;
	line-height: 14px;
	letter-spacing: 0.15px;
	text-align: center;
	color: ${({ color }) => color};
`;

const PasswordLock = ({
	theme,
	noLockIcon,
	submitButton,
	hintEnabled,
	hint,
	hintColor,
	passwordInput,
	passwordValid,
	passwordSubmitted,
	onInputPassword,
	onSubmitPassword,
}) => {
	const { whiskey, white } = theme.colors;

	const [buttonPressed, setButtonPressed] = useState(false);
	const [inputFocused, setInputFocused] = useState(false);

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
				onFocus={() => setInputFocused(true)}
				onBlue={() => setInputFocused(false)}
				value={passwordInput}
				style={theme.shadows.default}
				isFocused={inputFocused}
				passwordValid={passwordValid}
				passwordSubmitted={passwordSubmitted}
			/>
			{hintEnabled && <Hint color={hintColor}>{hint}</Hint>}
			{submitButton && (
				<FlatButton
					text="ok"
					borderColor={whiskey}
					inactiveButtonColor={white}
					inactiveTextColor={whiskey}
					activeButtonColor={whiskey}
					activeTextColor={white}
					pressHandler={onPress}
				/>
			)}
		</Wrapper>
	);
};

PasswordLock.propTypes = {
	noLockIcon: PropTypes.bool,
	submitButton: PropTypes.bool,
	hintEnabled: PropTypes.bool,
	hint: PropTypes.string,
	hintColor: PropTypes.string,
	passwordInput: PropTypes.string,
	passwordValid: PropTypes.bool.isRequired,
	onInputPassword: PropTypes.func,
	onSubmitPassword: PropTypes.func,
};

PasswordLock.defaultProps = {
	noLockIcon: false,
	submitButton: false,
	hint: undefined,
	hintColor: '#000',
	passwordInput: '',
	onInputPassword: () => {},
	onSubmitPassword: () => {},
};

export default withTheme(PasswordLock);

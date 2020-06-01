import React, { useState } from 'react';
import styled, { css, withTheme } from 'styled-components';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import Icon from 'sharedUI/Icon';
import RectButton from 'sharedUI/Button/RectButton';

import { rgba } from 'utils';
import { EMAIL_ACCOUNT, KEY_PUZZLE_D, SCREENS } from 'configs';

const COMMON_SIZES = {
	w: '64%',
	h: '28px',
	hButton: '40px',
};

const PASSWORD = KEY_PUZZLE_D;
const EMAIL = EMAIL_ACCOUNT;

const LogoContainer = styled.View`
	height: 28%;
	background-color: ${({ theme }) => theme.colors.ghostWhite};
	${({ theme }) => theme.styles.flex(null, null, null, true)};
`;

const ContentContainer = styled.View`
	flex: 1;
	top: -8%;
	${({ theme }) => theme.styles.flex(null, null, null, true)};
`;

const StyledText = styled.Text`
	color: ${({ theme }) => theme.colors.charcoal};
	font-family: ${({ theme }) => theme.fonts.cairo.regular};
	font-size: ${({ size }) => size}px;
	letter-spacing: ${({ letterSpacing }) => letterSpacing || 0}px;
`;

const Input = styled.TextInput`
	width: ${COMMON_SIZES.w};
	height: ${COMMON_SIZES.h};
	${({ theme }) => theme.styles.flexWithoutSize()};
	background-color: ${({ theme }) => rgba(theme.colors.persianRedAlpha, 0.2)};
	color: ${({ theme }) => theme.colors.charcoal};
	${({ theme }) => theme.styles.os.input}
	letter-spacing: 0.21px;
	padding: 0 14px;
	margin-bottom: 18px;
`;

const FailedText = styled.Text`
	${({ theme }) => theme.styles.flex()};
	${({ theme }) => theme.styles.os.inputItalic}
	color: ${({ theme }) => theme.colors.persianRed};
	letter-spacing: 0.21px;
	margin-bottom: 16px;
`;

const SeparatorContainer = styled.View`
	margin-top: 18px;
	margin-bottom: 28px;
	width: ${COMMON_SIZES.w};
	${({ theme }) => theme.styles.flexWithoutSize()};
`;

const Separator = styled.View`
	background-color: ${({ theme }) => theme.colors.charcoal};
	height: 1px;
	width: 100%;
	margin-top: 14px;
`;

const EmailLoginScreen = ({ route, navigation, theme }) => {
	const [emailInput, setEmailInput] = useState(EMAIL);
	const [passwordInput, setPasswordInput] = useState('');
	const [failed, setFailed] = useState(false);

	const onSubmit = () => {
		if (passwordInput !== PASSWORD || emailInput !== EMAIL) {
			setFailed(true);
		} else {
			navigation.navigate(SCREENS.EMAIL);
		}
	};

	const rectButtonTextStyle = css`
		font-family: ${theme.fonts.cairo.regular};
		font-size: ${theme.typo.sizes.h3};
		color: ${theme.colors.ghostWhite};
		letter-spacing: 0.28px;
	`;

	return (
		<LayoutWrapper screenName={route.name}>
			<LogoContainer>
				<Icon type="EMAIL_XL" />
			</LogoContainer>
			<ContentContainer>
				<StyledText
					size={19}
					letterSpacing={0.38}
					css={`
						${css`
							${theme.styles.flexWithoutSize()}
							width: ${COMMON_SIZES.w};
							margin-bottom: 32px;
						`}
					`}>
					Connexion
				</StyledText>
				<Input value={emailInput} onChangeText={(text) => setEmailInput(text)} />
				{failed && <FailedText>Email ou mot de passe incorrect.</FailedText>}
				<Input
					value={passwordInput}
					secureTextEntry
					blurOnSubmit
					onSubmitEditing={onSubmit}
					onChangeText={(text) => setPasswordInput(text)}
				/>
				<RectButton
					width={COMMON_SIZES.w}
					height={COMMON_SIZES.hButton}
					text="connexion"
					pressHandler={onSubmit}
					additionalTextStyle={rectButtonTextStyle}
					backgroundColor={theme.colors.persianRed}
				/>
				<SeparatorContainer>
					<StyledText size={12} letterSpacing={0.23}>
						Mot de passe oublié ?
					</StyledText>
					<Separator />
				</SeparatorContainer>
				<RectButton
					width={COMMON_SIZES.w}
					height={COMMON_SIZES.hButton}
					text="se créer un compte"
					pressHandler={onSubmit}
					additionalTextStyle={rectButtonTextStyle}
					backgroundColor={theme.colors.persianRed}
				/>
			</ContentContainer>
		</LayoutWrapper>
	);
};

export default withTheme(EmailLoginScreen);

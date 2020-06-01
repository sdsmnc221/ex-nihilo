import React, { useState } from 'react';
import styled, { css, withTheme } from 'styled-components';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import Icon from 'sharedUI/Icon';
import RectButton from 'sharedUI/Button/RectButton';

import { ACCOUNT_FACEBOOK, KEY_PUZZLE_C, SCREENS } from 'configs';

const COMMON_SIZES = {
	w: '72%',
	h: '36px',
};

const PASSWORD = KEY_PUZZLE_C;
const EMAIL = ACCOUNT_FACEBOOK;

const LogoContainer = styled.View`
	height: 32%;
	background-color: ${({ theme }) => theme.colors.slateBlue};
	${({ theme }) => theme.styles.flex(null, null, null, true)};
`;

const ContentContainer = styled.View`
	flex: 1;
	top: -4%;
	${({ theme }) => theme.styles.flex(null, null, null, true)};
`;

const Input = styled.TextInput`
	width: ${COMMON_SIZES.w};
	height: ${COMMON_SIZES.h};
	${({ theme }) => theme.styles.flexWithoutSize()};
	border: 1px solid ${({ theme }) => theme.colors.slateBlue};
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.charcoal};
	${({ theme }) => theme.styles.os.input}
	letter-spacing: 0.21px;
	padding: 0 12px;
	margin-bottom: 16px;
`;

const FailedText = styled.Text`
	${({ theme }) => theme.styles.flex()};
	${({ theme }) => theme.styles.os.inputItalic}
	color: ${({ theme }) => theme.colors.slateBlue};
	letter-spacing: 0.21px;
	margin-bottom: 16px;
`;

const SeparatorContainer = styled.View`
	margin: 20px;
	width: ${COMMON_SIZES.w};
	${({ theme }) => theme.styles.flexWithoutSize()};
`;

const StyledText = styled.Text`
	color: ${({ theme }) => theme.colors.charcoal};
	font-family: ${({ theme }) => theme.fonts.sourceSans.regular};
	font-size: ${({ size }) => size}px;
	letter-spacing: ${({ letterSpacing }) => letterSpacing || 0}px;
`;

const Separator = styled.View`
	position: relative;
	margin: 20px;
	${({ theme }) => theme.styles.flex(null, null, 'row', true)};
`;

const Line = styled.View`
	background-color: ${({ theme }) => theme.colors.charcoal};
	height: 0.7px;
	width: 100%;
`;

const FacebookLoginScreen = ({ route, navigation, theme }) => {
	const [emailInput, setEmailInput] = useState('sam.blanchard@gmail.com');
	const [passwordInput, setPasswordInput] = useState('');
	const [failed, setFailed] = useState(false);

	const onSubmit = () => {
		if (passwordInput !== PASSWORD || emailInput !== EMAIL) {
			setFailed(true);
		} else {
			navigation.navigate(SCREENS.FACEBOOK);
		}
	};

	const rectButtonTextStyle = css`
		font-family: ${theme.fonts.sourceSans.semiBold};
		font-size: ${theme.typo.sizes.body};
		color: ${theme.colors.ghostWhite};
		letter-spacing: 0.27px;
	`;

	return (
		<LayoutWrapper screenName={route.name}>
			<LogoContainer>
				<Icon type="FACEBOOK_XL" />
			</LogoContainer>
			<ContentContainer>
				<Input value={emailInput} onChangeText={(text) => setEmailInput(text)} />
				{failed && (
					<FailedText color="#DDD">Email ou mot de passe incorrect.</FailedText>
				)}
				<Input
					value={passwordInput}
					secureTextEntry
					blurOnSubmit
					onSubmitEditing={onSubmit}
					onChangeText={(text) => setPasswordInput(text)}
				/>
				<RectButton
					width={COMMON_SIZES.w}
					height={COMMON_SIZES.h}
					text="connexion"
					pressHandler={onSubmit}
					additionalStyle={rectButtonTextStyle}
					backgroundColor={theme.colors.slateBlue}
				/>
				<SeparatorContainer>
					<StyledText size={12} letterSpacing={0.23}>
						mot de passe oublié ?
					</StyledText>
					<Separator>
						<Line />
						<View
							css={`
								${css`
									position: absolute;
									background-color: ${theme.colors.ghostWhite};
									padding: 4px;
								`}
							`}>
							<StyledText size={11} letterSpacing={0.21}>
								ou
							</StyledText>
						</View>
					</Separator>
				</SeparatorContainer>
				<RectButton
					width="72%"
					height={42}
					text="créer un compte facebook"
					additionalStyle={rectButtonTextStyle}
					backgroundColor={theme.colors.slateBlue}
				/>
			</ContentContainer>
		</LayoutWrapper>
	);
};

export default withTheme(FacebookLoginScreen);

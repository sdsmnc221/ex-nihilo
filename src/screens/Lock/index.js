import React, { useState, useEffect } from 'react';
import styled, { withTheme } from 'styled-components';
import { View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import BG_LOCKSCREEN from 'assets/images/BG-LockScreen.png';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import BackgroundImage from 'sharedUI/BackgroundImage';
import PasswordLock from 'sharedUI/PasswordLock';

import { KEY_PUZZLE_A } from 'configs';

const Solid = styled.View`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.ghostWhite};
	opacity: 0.6;
`;

const LockScreen = ({ navigation, theme }) => {
	const PASSWORD = KEY_PUZZLE_A;
	const [numberOfTry, setNumberOfTry] = useState(0);
	const [messageFailed, setMessageFailed] = useState('');
	const [passwordInput, setPasswordInput] = useState('');
	const [passwordValid, setPassWordValid] = useState(false);
	const [passwordSubmitted, setPassWordSubmitted] = useState(false);

	const onSubmit = () => {
		setPassWordSubmitted(true);

		if (passwordInput !== PASSWORD) {
			setPassWordValid(false);
			setNumberOfTry(numberOfTry + 1);

			if (numberOfTry >= 2) {
				setMessageFailed(
					'Le saviez-vous les catégories de mots de passe les plus répandu sont : les dates de naissances,  le nom d’un animal de compagnie, 1 2 3 4, ou encore password.'
				);
			} else {
				setMessageFailed('Mot de passe incorrect');
			}
		} else {
			setPassWordValid(true);
		}
	};

	useEffect(() => {
		if (passwordValid) {
			setTimeout(() => {
				navigation.navigate('HomeScreen');
			}, 32);
		}
	}, [passwordValid, navigation]);

	const onSwipeRight = () => navigation.navigate('NotificationsScreen');

	return (
		<LayoutWrapper>
			<GestureRecognizer onSwipeRight={onSwipeRight}>
				<View
					css={`
						${theme.styles.body()}
					`}>
					<BackgroundImage source={BG_LOCKSCREEN} />
					<Solid />
					<PasswordLock
						noLockIcon
						submitButton
						hintEnabled
						hint={messageFailed}
						hintColor={theme.colors.charcoal}
						passwordInput={passwordInput}
						passwordValid={passwordValid}
						passwordSubmitted={passwordSubmitted}
						onInputPassword={(text) => setPasswordInput(text)}
						onSubmitPassword={onSubmit}
					/>
				</View>
			</GestureRecognizer>
		</LayoutWrapper>
	);
};

export default withTheme(LockScreen);
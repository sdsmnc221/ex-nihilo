import React, { useState, useEffect } from 'react';
import styled, { withTheme } from 'styled-components';
import { useDispatch } from 'react-redux';
import GestureRecognizer from 'react-native-swipe-gestures';
import { Keyboard } from 'react-native';

import BG_LOCKSCREEN from 'assets/images/BG-LockScreen.png';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import BackgroundImage from 'sharedUI/BackgroundImage';
import PasswordLock from 'sharedUI/PasswordLock';

import { KEY_PUZZLE_A, SCREENS } from 'configs';

import { unlockApp } from 'states/actions/gameActions';

const LockScreen = ({ navigation, theme }) => {
	const dispatch = useDispatch();

	const PASSWORD = KEY_PUZZLE_A;
	const [numberOfTry, setNumberOfTry] = useState(0);
	const [messageFailed, setMessageFailed] = useState('');
	const [passwordInput, setPasswordInput] = useState('');
	const [passwordValid, setPasswordValid] = useState(false);
	const [passwordSubmitted, setPasswordSubmitted] = useState(false);

	const onSubmit = () => {
		setPasswordSubmitted(true);

		if (passwordInput !== PASSWORD) {
			setPasswordValid(false);
			setPasswordSubmitted(false);
			setNumberOfTry(numberOfTry + 1);

			if (numberOfTry >= 2) {
				setMessageFailed(
					'Le saviez-vous les catégories de mots de passe les plus répandu sont : les dates de naissances,  le nom d’un animal de compagnie, 1 2 3 4, ou encore password.'
				);
			} else {
				setMessageFailed('Mot de passe incorrect');
			}
		} else {
			setPasswordValid(true);
			unlockApp(dispatch);
		}
	};

	useEffect(() => {
		if (passwordValid) {
			Keyboard.dismiss();
			setTimeout(() => {
				navigation.navigate(SCREENS.HOME);
			}, 32);
		}
	}, [passwordValid, navigation]);

	const onSwipeRight = () => navigation.navigate(SCREENS.NOTIFICATIONS);

	return (
		<LayoutWrapper>
			<GestureRecognizer
				onSwipeRight={onSwipeRight}
				css={`
					${theme.styles.body()}
				`}>
				<BackgroundImage
					source={BG_LOCKSCREEN}
					solid
					solidColor={theme.colors.ghostWhite}
					solidOpacity={0.6}
				/>

				<PasswordLock
					submitButton
					hintEnabled
					hint={messageFailed}
					passwordInput={passwordInput}
					passwordValid={passwordValid}
					passwordSubmitted={passwordSubmitted}
					onInputPassword={(text) => setPasswordInput(text)}
					onSubmitPassword={onSubmit}
				/>
			</GestureRecognizer>
		</LayoutWrapper>
	);
};

export default withTheme(LockScreen);

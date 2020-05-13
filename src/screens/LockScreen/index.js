import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GestureRecognizer from 'react-native-swipe-gestures';
import styled from 'styled-components';

import BG_LOCKSCREEN from 'assets/images/BG-LockScreen.png';

import BackgroundImage from 'sharedUI/BackgroundImage';
import PasswordLock from 'sharedUI/PasswordLock';

import { colors } from 'configs/theme';

const Solid = styled.View`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: ${colors.ghostWhite};
	opacity: 0.6;
`;

const LockScreen = ({ navigation }) => {
	const [numberOfTry, setNumberOfTry] = useState(0);
	const [messageFailed, setMessageFailed] = useState('');
	const [passwordInput, setPasswordInput] = useState('');
	const [phonePassword, setPhonePassword] = useState('Thierry');

	const onSubmit = () => {
		if (passwordInput !== phonePassword) {
			setNumberOfTry(numberOfTry + 1);
			console.log(passwordInput + ' | ' + numberOfTry);
			if (numberOfTry >= 2) {
				setMessageFailed(
					'Le saviez-vous les catégories de mots de passe les plus répandu sont : les dates de naissances,  le nom d’un animal de compagnie, 1 2 3 4, ou encore password.'
				);
			} else {
				setMessageFailed('Mot de passe incorrect');
			}
		} else {
			navigation.navigate('HomeScreen');
		}
	};
	// const onSubmit = () => navigation.navigate('HomeScreen');
	const onSwipeRight = () => navigation.navigate('NotificationsScreen');

	return (
		<SafeAreaView>
			<GestureRecognizer onSwipeRight={onSwipeRight}>
				<View style={styles.body}>
					<BackgroundImage source={BG_LOCKSCREEN} />
					<Solid />
					<PasswordLock
						noLockIcon
						submitButton
						hintEnabled
						hint={messageFailed}
						passwordInput={passwordInput}
						onInputPassword={(text) => setPasswordInput(text)}
						onSubmitPassword={onSubmit}
					/>
				</View>
			</GestureRecognizer>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	body: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default LockScreen;

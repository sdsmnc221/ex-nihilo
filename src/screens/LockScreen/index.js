import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import PasswordLock from 'sharedUI/PasswordLock';

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
					'Le saviez-vous les catégories de mots de passe les plus répandu sont : les dates de naissances,  le nom d’un animal de compagnie ,1 2 3 4, ou encore password.'
				);
			} else {
				setMessageFailed('Mot de passe incorrect');
			}
		} else {
			navigation.navigate('HomeScreen');
		}
	};
	// const onSubmit = () => navigation.navigate('HomeScreen');
	const onSwipeDown = (gestureState) =>
		navigation.navigate('NotificationsScreen');

	return (
		<>
			<SafeAreaView>
				<GestureRecognizer onSwipeDown={onSwipeDown}>
					<View style={styles.body}>
						<PasswordLock
							hintEnabled
							hint={messageFailed}
							passwordInput={passwordInput}
							onInputPassword={(text) => setPasswordInput(text)}
							onSubmitPassword={onSubmit}
						/>
					</View>
				</GestureRecognizer>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: '#c4c4c4',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default LockScreen;

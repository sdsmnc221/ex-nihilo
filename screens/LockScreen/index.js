import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components';
import { TextInput } from 'react-native-gesture-handler';
import GestureRecognizer from 'react-native-swipe-gestures';

import Icon from '../../sharedUI/Icon';

const IconWrapper = styled.View`
	margin-bottom: 32px;
`;

const Title = styled.Text`
	margin-bottom: 12px;
	font-size: 14px;
	font-weight: bold;
`;

const Input = styled.TextInput`
	width: 64%;
	background-color: #e8e8e8;
	font-size: 12px;
	text-align: center;
	padding: 8px;
`;

const Hint = styled.Text`
	width: 64%;
	font-size: 11px;
	margin-top: 12px;
	text-align: center;
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
						<IconWrapper>
							<Icon type="LOCK" />
						</IconWrapper>
						<Title>Entrer le mot de passe</Title>
						<Input
							secureTextEntry
							blurOnSubmit
							onChangeText={(text) => setPasswordInput(text)}
							value={passwordInput}
							onSubmitEditing={onSubmit}
						/>
						<Hint>{messageFailed}</Hint>
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

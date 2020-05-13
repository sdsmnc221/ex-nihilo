import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';
import { request, PERMISSIONS } from 'react-native-permissions';
import Contacts from 'react-native-contacts';

import { fonts, colors } from 'configs/theme';

const Content = styled.Text`
	color: ${colors.white};
	font-family: ${fonts.cairo.semiBold};
	font-size: 15px;
	line-height: 18px;
	letter-spacing: 0.75px;
	margin-left: 10%;
	margin-right: 40%;
`;

const Button = styled.TouchableOpacity`
	position: absolute;
	bottom: 12%;
	background-color: ${({ active }) => (active ? colors.white : 'transparent')};
	border: 1px solid ${colors.white};
	border-radius: 50px;
	padding: 12px 32px;
	justify-content: center;
	align-items: center;
`;

const ButtonText = styled.Text`
	color: ${({ active }) => (active ? colors.charcoal : colors.white)};
	font-family: ${fonts.cairo.semiBold};
	font-size: 15px;
	letter-spacing: 0.75px;
	text-align: center;
`;

const IntroScreen = ({ navigation }) => {
	const [buttonPressed, setButtonPressed] = useState(false);

	const contactsRef = useRef(null);

	const onPress = () => setButtonPressed(!buttonPressed);

	async function requestPermissions() {
		const rationale = {
			title: 'Permissions thing',
			message: 'Request permission',
			buttonPositive: 'Please accept bare mortal',
		};
		const readContactsStatus = await request(
			PERMISSIONS.ANDROID.READ_CONTACTS,
			rationale
		);
		const writeContactsStatus = await request(
			PERMISSIONS.ANDROID.WRITE_CONTACTS,
			rationale
		);
		return { readContactsStatus, writeContactsStatus };
	}

	useEffect(() => {
		requestPermissions().then((statuses) => {
			console.log(statuses);
			Contacts.getAllWithoutPhotos((err, contacts) => {
				if (err === 'denied') {
					// error
				} else {
					contactsRef.current = contacts;
				}
			});
		});
	}, []);

	useEffect(() => {
		if (buttonPressed) {
			setTimeout(
				() => navigation.navigate('NotificationsScreen', { contactsRef }),
				60
			);
		}
	}, [buttonPressed, navigation]);

	return (
		<SafeAreaView style={styles.body}>
			<Content>
				Vous êtes dans la rue,
				{'\n'}
				vous vous baladez quand tout à coup vous entendez un téléphone sonner.
				{'\n'}
				Vous regardez autour de vous et vous découvrez que la sonnerie vient d’un
				téléphone sur le sol.
				{'\n'}
				Vous demandez autour de vous si ce téléphone appartient à quelqu’un, mais ce
				n’est pas le cas.
				{'\n'}
				{'\n'}
				{'\n'}
				Vous décidez de garder le téléphone... et d’essayer de retrouver
				{'\n'}
				son
				{'\n'}
				propriétaire.
			</Content>
			<Button onPress={onPress} active={buttonPressed} activeOpacity={0.8}>
				<ButtonText active={buttonPressed}>commencer</ButtonText>
			</Button>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: colors.charcoal,
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default IntroScreen;

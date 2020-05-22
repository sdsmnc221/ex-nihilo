import React, { useEffect, useRef } from 'react';
import styled, { withTheme, css } from 'styled-components';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { request, PERMISSIONS } from 'react-native-permissions';
import Contacts from 'react-native-contacts';

import FlatButton from 'sharedUI/Button/FlatButton';

const Content = styled.Text`
	margin-left: 10%;
	margin-right: 40%;
	color: ${({ theme }) => theme.colors.white};
	line-height: 18px;
	${({ theme }) => theme.styles.os.boldBody}
`;

const styledFlatButton = css`
	position: absolute;
	bottom: 12%;
	width: auto;
	padding: 12px 32px;
`;

const IntroScreen = ({ navigation, theme }) => {
	const contactsRef = useRef(null);

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

	return (
		<SafeAreaView
			css={`
				${theme.styles.body(theme.colors.charcoal)}
			`}>
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
			<FlatButton
				text="commencer"
				additionalStyle={`${styledFlatButton}`}
				pressHandler={() =>
					navigation.navigate('NotificationsScreen', { contactsRef })
				}
			/>
		</SafeAreaView>
	);
};

export default withTheme(IntroScreen);

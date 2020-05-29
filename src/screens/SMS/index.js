import React, { useEffect, useState } from 'react';
import { css, withTheme } from 'styled-components';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

import Contacts from 'react-native-contacts';
import { useSelector } from 'react-redux';

import { shuffle } from 'utils';

import SmsShort from './components/SmsShort';
import NavigationBar from 'sharedUI/NavigationBar';
import AddButton from 'sharedUI/Button/AddButton';

const SmsScreen = ({ navigation, theme }) => {
	const [contacts, setContacts] = useState(
		useSelector((state) => state.contacts).map(
			(contact) => contact.name || contact.phoneNumber
		)
	);

	useEffect(() => {
		Contacts.getAllWithoutPhotos((err, contacts_) => {
			if (err === 'denied') {
				// error
			} else {
				let deviceContacts = contacts_.filter(
					(contact) => contact.phoneNumbers.length > 0
				);

				if (deviceContacts.length > 0) {
					deviceContacts = deviceContacts.map(
						(contact) => contact.displayName || contact.phoneNumbers[0].number
					);

					setContacts((prevContacts) =>
						shuffle([...prevContacts, ...deviceContacts])
					);
				}
			}
		});
	}, []);

	const smsList = contacts.map((contactName) => {
		return {
			date: 'Hier',
			title: contactName,
			message:
				'Moi: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo',
		};
	});

	return (
		<SafeAreaView>
			<View
				css={`
					${css`
						${theme.styles.body()}
					`}
				`}>
				<ScrollView contentContainerStyle={styles.scrollBody}>
					<SmsShort
						date="À l'instant"
						title="Janus"
						message="Bonjour toi"
						onPress={() =>
							navigation.navigate('JanusConversation', {
								headerTitle: 'Janus',
							})
						}
					/>
					{smsList.map((s, i) => (
						<SmsShort
							key={i}
							date={s.date}
							title={s.title}
							message={s.message}
							onPress={() =>
								navigation.navigate('SmsConversation', {
									headerTitle: s.title,
								})
							}
						/>
					))}
				</ScrollView>
				<AddButton />
			</View>

			<NavigationBar onPressHome={() => navigation.navigate('HomeScreen')} black />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	scrollBody: {
		width: '100%',
		paddingTop: 36,
		paddingBottom: 84,
	},
});

export default withTheme(SmsScreen);

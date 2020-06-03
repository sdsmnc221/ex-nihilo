import React, { useEffect, useState } from 'react';
import { css } from 'styled-components';
import { useSelector } from 'react-redux';
import Contacts from 'react-native-contacts';
import { StyleSheet, View } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import Contact from './components/Contact';

import { sortContact, random } from 'utils';
import { SCREENS } from 'configs';

const flatListStyle = css`
	width: 100%;
`;

const ContactsScreen = ({ route, navigation }) => {
	const [contacts, setContacts] = useState(
		useSelector((state) => state.contacts).map((contact) => ({
			name: contact.name,
			number: contact.phoneNumber,
			star: random(0.1),
		}))
	);
	useEffect(() => {
		Contacts.getAllWithoutPhotos((err, contacts_) => {
			if (err === 'denied') {
				// error
			} else {
				let deviceContacts =
					contacts_.filter((contact) => contact.phoneNumbers.length > 0) || [];

				if (deviceContacts.length > 0) {
					deviceContacts = deviceContacts.map((contact) => {
						const { displayName, phoneNumbers } = contact;
						const { number } = phoneNumbers[0];

						return {
							name: displayName !== number ? displayName : null,
							number: number.replace('+33 ', '0'),
							star: random(0.1),
						};
					});
				}

				setContacts((prevContacts) => {
					const sortedContacts = [...prevContacts, ...deviceContacts].sort(
						sortContact
					);

					return sortedContacts;
				});
			}
		});
	}, []);

	return (
		<LayoutWrapper screenName={route.name}>
			<FlatList
				css={`
					${flatListStyle}
				`}
				data={contacts}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item: contact }) => (
					<Contact
						contact={contact}
						firstLetter={contact.name ? contact.name.charAt(0) : '#'}
						onPress={() =>
							navigation.navigate(SCREENS.CONTACTS_DETAILS, {
								contact,
							})
						}
					/>
				)}
			/>
		</LayoutWrapper>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: '#fff',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	scrollBody: {
		backgroundColor: '#fff',
		width: '100%',
		paddingTop: 36,
		paddingBottom: 84,
	},
});

export default ContactsScreen;

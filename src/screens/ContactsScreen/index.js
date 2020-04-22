import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Contacts from 'react-native-contacts';
import { useSelector } from 'react-redux';

import { sortContact } from 'utils';

import NavigationBar from 'sharedUI/NavigationBar';
import AddButton from 'sharedUI/Button/AddButton';
import Contact from './components/Contact';

const ContactsScreen = ({ navigation }) => {
	const [contacts, setContacts] = useState(
		useSelector((state) => state.contacts).map((contact) => ({
			name: contact.name,
			number: contact.phoneNumber,
		}))
	);
	useEffect(() => {
		Contacts.getAllWithoutPhotos((err, contacts_) => {
			if (err === 'denied') {
				// error
				console.log(contacts);
			} else {
				let deviceContacts = contacts_.filter(
					(contact) => contact.phoneNumbers.length > 0
				);
				let sortedContacts = [];

				if (deviceContacts.length > 0) {
					deviceContacts = deviceContacts.map((contact) => {
						const { displayName, phoneNumbers } = contact;
						const { number } = phoneNumbers[0];

						return {
							name: displayName !== number ? displayName : null,
							number: number.replace('+33 ', '0'),
						};
					});

					sortedContacts = [...contacts, ...deviceContacts].sort(sortContact);
				} else {
					sortedContacts = [...contacts.sort(sortContact)];
				}

				setContacts(sortedContacts);
			}
		});
	}, []);

	return (
		<>
			<SafeAreaView>
				<View style={styles.body}>
					<ScrollView contentContainerStyle={styles.scrollBody}>
						{contacts.map((c, i) => (
							<Contact
								key={i}
								contact={c}
								onPress={() =>
									navigation.navigate('HomeScreen', { headerTitle: c.title })
								}
							/>
						))}
					</ScrollView>
					<AddButton />
				</View>
				<NavigationBar
					onPressHome={() => navigation.navigate('HomeScreen')}
					black
				/>
			</SafeAreaView>
		</>
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

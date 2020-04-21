import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Contacts from 'react-native-contacts';

import { sortContact } from 'utils';

import NavigationBar from 'sharedUI/NavigationBar';
import AddButton from 'sharedUI/Button/AddButton';
import Contact from './components/Contact';

const ContactsScreen = ({ navigation }) => {
	const [contacts, setContacts] = useState([
		{
			name: '',
			number: '117',
		},
		{
			name: '',
			number: '438',
		},
		{
			name: '',
			number: '550',
		},
		{
			name: '',
			number: '950',
		},
		{
			name: 'Marie Dupont',
			number: '+33 7 53 69 93 21',
		},
		
	]);

	useEffect(() => {
		Contacts.getAllWithoutPhotos((err, contacts_) => {
			if (err === 'denied') {
				// error
				console.log(contacts);
			} else {
				const deviceContacts = contacts_.filter((c) => c.phoneNumbers.length > 0);
				if (deviceContacts.length > 0) {
					const sortedContact = deviceContacts.map((contact) => {
						const { displayName, phoneNumbers } = contact;
						const { number } = phoneNumbers[0];
						
						return {
							name: displayName != number ? displayName : null,
							number: number.replace('+33 ', '0'),
						};
					}).sort(sortContact)
					setContacts(sortedContact);
				}
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

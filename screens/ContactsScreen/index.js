import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import styled from 'styled-components';
import Contacts from 'react-native-contacts';

import { shuffle } from '../../utils';

import NavigationBar from '../../sharedUI/NavigationBar';
import Contact from '../../sharedUI/Contact';
import AddButton from '../../sharedUI/Button/AddButton';

const ContactsList = styled.ScrollView`
	width: 100%;
	background-color: #fff;
	margin-top: 48px;
`;

const ContactsScreen = ({ navigation }) => {
	const [contacts, setContacts] = useState([
		{
			name: '',
			number: '950',
		},
		{
			name: '',
			number: '550',
		},
		{
			name: '',
			number: '438',
		},
		{
			name: 'Marie Dupont',
			number: '+33 7 53 69 93 21',
		},
		{
			name: '',
			number: '117',
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
					const shuffledContacts = shuffle(
						deviceContacts.map((contact) => {
							const { displayName, phoneNumbers } = contact;
							const { number } = phoneNumbers[0];
							return {
								name: displayName || number,
								number,
							};
						})
					);
					setContacts(shuffledContacts);
				}
			}
		});
	}, []);

	return (
		<>
			<SafeAreaView>
				<View style={styles.body}>
					<ContactsList>
						{contacts.map((c, i) => (
							<Contact
								key={i}
								title={c.name ? c.name : c.number}
								onPress={() => navigation.navigate('', { headerTitle: c.title })}
							/>
						))}
					</ContactsList>
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
});

export default ContactsScreen;

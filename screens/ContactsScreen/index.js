import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components';
import Contacts from 'react-native-contacts';

import { shuffle } from '../../utils';

import NavigationBar from '../../sharedUI/NavigationBar';
import Icon from '../../sharedUI/Icon';
import Contact from '../../sharedUI/Contact';

const ContactsList = styled.ScrollView`
	width: 100%;
	background-color: #fff;
	margin-top: 48px;
`;

const AddButton = styled.View`
	position: absolute;
	right: 12px;
	bottom: 64px;
	background-color: #565656;
	width: 56px;
	height: 56px;
	border-radius: 56px;
	display: flex;
	justify-content: center;
	align-items: center;
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
					const shuffleContact = shuffle(
						deviceContacts.map((c) => c.phoneNumbers[0].number)
					);
					shuffleContact.map((c, i) => {
						setContacts({ name: '', number: c });
					});
					console.log(contacts);
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
					<AddButton>
						<Icon type="ADD" />
					</AddButton>
					<NavigationBar
						onPressHome={() => navigation.navigate('HomeScreen')}
						black
					/>
				</View>
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

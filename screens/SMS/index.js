import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components';
import Contacts from 'react-native-contacts';

import { shuffle } from '../../utils';

import SmsShort from '../../sharedUI/SmsShort';
import NavigationBar from '../../sharedUI/NavigationBar';
import Icon from '../../sharedUI/Icon';

const SmsList = styled.ScrollView`
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

const SmsScreen = ({ navigation }) => {
	const [contacts, setContacts] = useState([
		'950',
		'550',
		'438',
		'Marie Dupont',
		'117',
	]);

	useEffect(() => {
		Contacts.getAllWithoutPhotos((err, contacts_) => {
			if (err === 'denied') {
				// error
			} else {
				const deviceContacts = contacts_.filter((c) => c.phoneNumbers.length > 0);
				if (deviceContacts.length > 0) {
					setContacts(shuffle(deviceContacts.map((c) => c.phoneNumbers[0].number)));
				}
			}
		});
	}, []);

	const smsList = contacts.map((c) => {
		return {
			date: 'Hier',
			title: c,
			message:
				'Moi: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo',
		};
	});

	// .unshift({
	//   date: 'Il y a 30s',
	//   title: 'JANUS',
	//   message: 'Salut toi'
	// });

	return (
		<>
			<SafeAreaView>
				<View style={styles.body}>
					<SmsList>
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
					</SmsList>
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

export default SmsScreen;

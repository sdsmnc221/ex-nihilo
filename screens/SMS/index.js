import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Contacts from 'react-native-contacts';

import { shuffle } from '../../utils';

import SmsShort from '../../sharedUI/SmsShort';
import NavigationBar from '../../sharedUI/NavigationBar';
import AddButton from '../../sharedUI/Button/AddButton';
import { ScrollView } from 'react-native-gesture-handler';

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
					<ScrollView contentContainerStyle={styles.scrollBody}>
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

export default SmsScreen;

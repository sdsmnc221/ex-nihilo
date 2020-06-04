import React, { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import Contacts from 'react-native-contacts';
import { FlatList } from 'react-native-gesture-handler';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import SmsShort from './components/SmsShort';
import FillGap from 'sharedUI/FillGap';

import { shuffle } from 'utils';
import { SCREENS } from 'configs';

const SmsScreen = ({ route, navigation, theme }) => {
	const [contacts, setContacts] = useState(
		useSelector((state) => state.contacts).map(
			(contact) => contact.name || contact.phoneNumber
		)
	);

	// useEffect(() => {
	// 	Contacts.getAllWithoutPhotos((err, contacts_) => {
	// 		if (err === 'denied') {
	// 			// error
	// 		} else {
	// 			let deviceContacts = contacts_.filter(
	// 				(contact) => contact.phoneNumbers.length > 0
	// 			);

	// 			if (deviceContacts.length > 0) {
	// 				deviceContacts = deviceContacts.map(
	// 					(contact) => contact.displayName || contact.phoneNumbers[0].number
	// 				);

	// 				setContacts((prevContacts) =>
	// 					shuffle([...prevContacts, ...deviceContacts])
	// 				);
	// 			}
	// 		}
	// 	});
	// }, []);

	const smsList = contacts.map((contactName) => ({
		date: 'Hier',
		title: contactName,
		message:
			'Moi: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo',
	}));

	smsList.unshift({
		date: "À l'instant",
		title: 'Janus',
		message: 'Bonjour toi',
	});

	return (
		<LayoutWrapper screenName={route.name}>
			<FlatList
				css={`
					${theme.styles.list}
				`}
				data={smsList}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item: sms, index }) => (
					<SmsShort
						id={index}
						date={sms.date}
						title={sms.title}
						message={sms.message}
						onPress={() =>
							navigation.navigate(
								sms.title === 'Janus' ? SCREENS.SMS_JANUS : SCREENS.SMS_CONVERSATION,
								{
									headerTitle: sms.title,
								}
							)
						}
					/>
				)}
				ListFooterComponent={<FillGap height={18} />}
			/>
			<FillGap />
		</LayoutWrapper>
	);
};

export default withTheme(SmsScreen);

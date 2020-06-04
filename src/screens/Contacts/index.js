import React, { useEffect, useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import Contacts from 'react-native-contacts';
import { View, Text, SectionList } from 'react-native';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import FillGap from 'sharedUI/FillGap';
import Contact from './components/Contact';

import { getSections, sortContact, random } from 'utils';
import { SCREENS } from 'configs';

const SectionTitle = styled.Text`
	font-family: ${({ theme }) => theme.fonts.sourceSans.semiBold};
	font-size: 19px;
	color: ${({ theme }) => theme.colors.charcoal};
	margin-left: 16px;
	margin-bottom: 16px;
`;

const ContactsScreen = ({ route, navigation, theme }) => {
	const [contacts, setContacts] = useState(
		useSelector((state) => state.contacts).map((contact) => ({
			name: contact.name,
			number: contact.phoneNumber,
			star: random(0.4),
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
							star: random(0.4),
						};
					});
				}

				setContacts((prevContacts) => {
					const sortedContacts = [...prevContacts, ...deviceContacts].sort(
						sortContact
					);

					console.log(sortedContacts, getSections(sortedContacts, 'name', 'number'));

					return sortedContacts;
				});
			}
		});
	}, []);

	return (
		<LayoutWrapper screenName={route.name}>
			<SectionList
				css={`
					${theme.styles.list}
				`}
				sections={getSections(contacts, 'name', 'number')}
				keyExtractor={(item, index) => index.toString()}
				renderSectionHeader={({ section: { title } }) => (
					<SectionTitle>{title}</SectionTitle>
				)}
				renderItem={({ item: contact }) => (
					<Contact
						contact={contact}
						firstLetter={contact.name ? contact.name.charAt(0) : '#'}
						onPress={() =>
							navigation.navigate(SCREENS.CONTACT_DETAILS, {
								contact,
							})
						}
					/>
				)}
				ListFooterComponent={<FillGap height={36} />}
			/>
			<FillGap />
		</LayoutWrapper>
	);
};

export default withTheme(ContactsScreen);

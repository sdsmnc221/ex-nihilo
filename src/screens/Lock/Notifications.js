import React, { useEffect, useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import BG_LOCKSCREEN from 'assets/images/BG-LockScreen.png';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import BackgroundImage from 'sharedUI/BackgroundImage';
import Clock from 'sharedUI/Clock';
import Notification from './components/Notification';
import Swiper from './components/Swiper';

import { shuffle, sampleSize } from 'utils';

const NotificationsList = styled.ScrollView`
	width: 80%;
	max-height: 42%;
`;

const NotificationsScreen = ({ route, navigation, theme }) => {
	const [contacts, setContacts] = useState(
		useSelector((state) => state.contacts).map(
			(contact) => contact.name || contact.phoneNumber
		)
	);

	const { contacts: contacts_ } = route.params;

	useEffect(() => {
		if (contacts_.length > 0) {
			let deviceContacts = contacts_.filter(
				(contact) => contact.phoneNumbers.length > 0
			);

			deviceContacts = deviceContacts.map(
				(contact) => contact.displayName || contact.phoneNumbers[0].number
			);

			setContacts((prevContacts) => shuffle([...prevContacts, ...deviceContacts]));
		}
	}, [contacts_]);

	const onSwipeLeft = () => navigation.navigate('LockScreen');

	const notifications = sampleSize(
		contacts.map((contactName) => {
			const type = Math.random() >= 0.5 ? 'message' : 'call';
			return {
				type,
				date: 'le 25/02/2020',
				title: contactName,
				message:
					type === 'message'
						? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo'
						: '',
			};
		}),
		contacts.length >= 12 ? 12 : contacts.length
	);

	return (
		<LayoutWrapper>
			<GestureRecognizer
				onSwipeLeft={onSwipeLeft}
				css={`
					${theme.styles.body()}
					justify-content: flex-end;
				`}>
				<BackgroundImage source={BG_LOCKSCREEN} />
				<Clock />
				<NotificationsList
					fadingEdgeLength={32}
					showsVerticalScrollIndicator={false}>
					{notifications.map((n, i) => (
						<Notification
							key={i}
							type={n.type}
							date={n.date}
							title={n.title}
							message={n.message}
						/>
					))}
				</NotificationsList>
				<Swiper onPress={onSwipeLeft} />
			</GestureRecognizer>
		</LayoutWrapper>
	);
};

export default withTheme(NotificationsScreen);

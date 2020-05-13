import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GestureRecognizer from 'react-native-swipe-gestures';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import BG_LOCKSCREEN from 'assets/images/BG-LockScreen.png';

import BackgroundImage from 'sharedUI/BackgroundImage';
import Clock from 'sharedUI/Clock';
import Notification from './components/Notification';
import Swiper from './components/Swiper';

import { shuffle, sampleSize } from 'utils';

const NotificationsList = styled.ScrollView`
	width: 80%;
	max-height: 46%;
`;

const NotificationsScreen = ({ route, navigation }) => {
	const { contactsRef } = route.params;

	const [contacts, setContacts] = useState(
		useSelector((state) => state.contacts).map(
			(contact) => contact.name || contact.phoneNumber
		)
	);

	useEffect(() => {
		if (contactsRef && contactsRef.current) {
			let deviceContacts = contactsRef.current.filter(
				(contact) => contact.phoneNumbers.length > 0
			);
			if (deviceContacts.length > 0) {
				deviceContacts = deviceContacts.map(
					(contact) => contact.displayName || contact.phoneNumbers[0].number
				);

				setContacts((prevContacts) =>
					shuffle([...prevContacts, ...deviceContacts])
				);
			}
		}
	}, [contactsRef]);

	useEffect(() => {
		console.log(contacts);
	}, [contacts]);

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
		contacts.length >= 32 ? 32 : contacts.length
	);

	return (
		<GestureRecognizer onSwipeLeft={onSwipeLeft}>
			<SafeAreaView style={styles.body}>
				<BackgroundImage source={BG_LOCKSCREEN} />
				<Clock />
				<NotificationsList>
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
			</SafeAreaView>
		</GestureRecognizer>
	);
};

const styles = StyleSheet.create({
	body: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
});

export default NotificationsScreen;

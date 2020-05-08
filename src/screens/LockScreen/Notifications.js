import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GestureRecognizer from 'react-native-swipe-gestures';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Clock from 'sharedUI/Clock';
import Notification from './components/Notification';

import { shuffle, sampleSize } from 'utils';

const NotificationsList = styled.ScrollView`
	width: 80%;
	max-height: 46%;
`;

const Swiper = styled.TouchableOpacity`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 24px;
`;

const SwiperText = styled.Text`
	font-size: 11px;
	letter-spacing: 0.8px;
`;

const SwiperNotch = styled.View`
	margin-top: 5px;
	width: 100px;
	height: 5px;
	background-color: #565656;
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

	const onSwipeUp = (gestureState) => navigation.navigate('LockScreen');

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
		<SafeAreaView>
			<GestureRecognizer onSwipeUp={onSwipeUp}>
				<View style={styles.body}>
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
					<Swiper>
						<SwiperText>Swipe to unlock</SwiperText>
						<SwiperNotch />
					</Swiper>
				</View>
			</GestureRecognizer>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: '#c4c4c4',
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingBottom: 12,
	},
});

export default NotificationsScreen;

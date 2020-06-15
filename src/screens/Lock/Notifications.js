import React from 'react';
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

import { SCREENS } from 'configs';

const NotificationsList = styled.ScrollView`
	width: 80%;
	max-height: 42%;
`;

const NotificationsScreen = ({ navigation, theme }) => {
	const { notifications } = useSelector((state) => state.mergedData);

	const onSwipeLeft = () => navigation.navigate(SCREENS.LOCK);

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

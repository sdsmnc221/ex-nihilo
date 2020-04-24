import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import styled from 'styled-components';

import FlexView from 'sharedUI/FlexView';
import Icon from 'sharedUI/Icon';

import { truncate } from 'utils';

const Wrapper = styled.TouchableOpacity`
	width: 92%;
	height: 11.5%;
	background-color: #c4c4c4;
	margin: 12px;
	padding: 12px 24px;
	justify-content: center;
	align-items: flex-start;
`;

const Type = styled.Text`
	font-size: 10px;
	margin-left: 12px;
`;

const Date = styled.Text`
	font-size: 9px;
`;

const Title = styled.Text`
	font-size: 11px;
	font-weight: bold;
	margin-top: 8px;
	margin-bottom: 4px;
`;

const Message = styled.Text`
	font-size: 11px;
`;

const styles = StyleSheet.create({
	modal: {
		flex: 1,
		margin: 0,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		elevation: 6, // android
	},
});

const Notification = ({
	triggerDelay,
	reappearDelay,
	type,
	iconType,
	date,
	title,
	message,
	onPress,
}) => {
	const [reappearEnabled, setReappearEnabled] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [isNotPressed, setIsNotPressed] = useState(true);

	let interval = useRef(null);
	let timeout = useRef(null);

	/*
	 * - if the notification appears for the first time, it will appear
	 *   after a 'triggerDelay' amount of time (which is kinda long).
	 *
	 * - if the notification is turned off (by swiping), it will reappear
	 *   every 'reappearDelay' amount of time (which is short),
	 *   to remind the user to press on it and go check it out.
	 */
	useEffect(() => {
		if (!reappearEnabled) {
			interval.current = setTimeout(() => setIsVisible(true), triggerDelay);
		} else {
			clearTimeout(timeout.current);
			interval.current = setInterval(() => setIsVisible(true), reappearDelay);
		}
	}, [reappearEnabled, triggerDelay, reappearDelay]);

	const onSwipe = () => {
		if (!reappearEnabled) {
			setReappearEnabled(true);
		}
		setIsVisible(false);
	};

	const switchScreen = () => {
		setIsVisible(false);
		setIsNotPressed(false);
		setTimeout(() => onPress(), 160);
		clearInterval(interval.current);
	};

	return (
		<Modal
			isVisible={isVisible}
			style={styles.modal}
			hasBackdrop={false}
			animationIn="slideInDown"
			animationOut="slideOutUp"
			animationInTiming={800}
			animationOutTiming={800}
			useNativeDriver
			swipeDirection={['left', 'right', 'up']}
			onSwipeComplete={onSwipe}>
			<Wrapper style={styles.shadow} activeOpacity={0.8} onPress={switchScreen}>
				<FlexView dir="row" justify="space-between" fullWidth>
					<FlexView dir="row">
						<Icon type={iconType} width={15} height={15} />
						<Type>{type}</Type>
					</FlexView>
					<Date>{date}</Date>
				</FlexView>
				<FlexView dir="column" align="flex-start" fullWidth>
					<Title>{title}</Title>
					<Message>{truncate(message, 64)}</Message>
				</FlexView>
			</Wrapper>
		</Modal>
	);
};

Notification.propTypes = {
	triggerDelay: PropTypes.number,
	reappearDelay: PropTypes.number,
	type: PropTypes.string,
	iconType: PropTypes.string,
	date: PropTypes.string,
	title: PropTypes.string,
	message: PropTypes.string,
	onPress: PropTypes.func,
};

Notification.defaultProps = {
	triggerDelay: 1000,
	reappearDelay: 4000,
	type: 'Messages',
	iconType: 'SMS',
	date: "À l'instant",
	title: 'Janus',
	message: 'Bonjour toi !',
	onPress: () => {},
};

export default Notification;

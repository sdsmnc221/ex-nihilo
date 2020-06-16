import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NeuView } from 'utils/react-native-neu-element';
import Modal from 'react-native-modal';

import FlexDiv from 'sharedUI/FlexDiv';
import AppIcon from 'sharedUI/AppIcon';

import DialogueMessage from 'data/classes/DialogueMessage';

import { device, tick, truncate } from 'utils';
import { NUMBERS, SCREENS } from 'configs';
import {
	hideNotification,
	repeatNotification,
	updateDialogueLog,
} from 'states/actions/storyActions';

const WIDTH = device().width * 0.84;

const Wrapper = styled.TouchableOpacity`
	${({ theme }) => theme.styles.flex(null, null, null, true)}
	margin: 8% 0;
`;

const Date = styled.Text`
	top: -8px;
	left: 8px;
	color: ${({ theme }) => theme.colors.charcoal};
	line-height: ${({ theme }) => theme.typo.sizesNb.subtitle}px;
	letter-spacing: 0.19px;
	${({ theme }) => theme.styles.os.subtitle};
`;

const Title = styled.Text`
	margin-bottom: 4px;
	color: ${({ isJanus, theme }) => theme.colors.slateBlue};
	letter-spacing: 0.27px;
	${({ theme }) => theme.styles.os.h3};
`;

const Message = styled.Text`
	color: ${({ theme }) => theme.colors.charcoal};
	letter-spacing: 0.23px;
	line-height: 15px;
	${({ theme }) => theme.styles.os.body};
`;

const Notification = ({ reappearDelay, navigationRef, theme }) => {
	const dispatch = useDispatch();

	const { notification } = useSelector((state) => state.story);
	const { shown, date, title, message, repeatCount } = notification;

	const [reappearEnabled, setReappearEnabled] = useState(shown);
	const [isVisible, setIsVisible] = useState(shown);
	const [notifs, setNotifs] = useState(repeatCount);

	let interval = useRef(null);

	useEffect(() => {
		setIsVisible(shown);
		setReappearEnabled(shown);
	}, [shown]);

	useEffect(() => {
		setNotifs(repeatCount);

		if (repeatCount >= 1) {
			updateDialogueLog(
				dispatch,
				new DialogueMessage({
					text: message,
				})
			);
		}
	}, [repeatCount]);

	/*
	 * - if the notification is turned off (by swiping), it will reappear
	 *   every 'reappearDelay' amount of time (which is short),
	 *   to remind the user to press on it and go check it out.
	 */
	useEffect(() => {
		if (reappearEnabled) {
			interval.current = setInterval(() => setIsVisible(true), reappearDelay);
		}
	}, [reappearEnabled, reappearDelay]);

	const onSwipe = () => {
		if (!reappearEnabled) {
			setReappearEnabled(true);
		}
		setIsVisible(false);
		repeatNotification(dispatch);
	};

	const onPress = () => {
		hideNotification(dispatch);
		tick(
			() => navigationRef.current?.navigate(SCREENS.SMS_JANUS),
			NUMBERS.RESET_PRESS_DURATION
		);
		setIsVisible(false);
		clearInterval(interval.current);
	};

	return (
		<Modal
			isVisible={isVisible}
			style={theme.styles.styleSheet.modal}
			hasBackdrop={false}
			coverScreen={false}
			animationIn="slideInDown"
			animationOut="slideOutUp"
			animationInTiming={800}
			animationOutTiming={800}
			useNativeDriver
			swipeDirection={['left', 'right', 'up']}
			onSwipeComplete={onSwipe}>
			<Wrapper
				onPress={onPress}
				activeOpacity={0.8}
				style={theme.shadows.notificationShadow}>
				<NeuView
					width={WIDTH}
					height={92}
					color={theme.colors.ghostWhite}
					borderRadius={18}
					{...theme.shadows.notification}>
					<FlexDiv
						direction="row"
						justifyContent="flex-start"
						fullWidth
						additionalStyle={css`
							padding: 20px;
						`}>
						<AppIcon
							size={49}
							type="PERSON"
							noBlink
							notifs={notifs}
							notifsLeft
							{...theme.shadows.softNeomorphism}
						/>
						<FlexDiv
							alignItems="flex-start"
							additionalStyle={css`
								margin-left: 16px;
								padding-right: 12px;
								width: 80%;
							`}>
							<FlexDiv direction="row" justifyContent="space-between" fullWidth>
								<Title>{title}</Title>
								<Date>{date}</Date>
							</FlexDiv>
							<Message>{truncate(message, 60)}</Message>
						</FlexDiv>
					</FlexDiv>
				</NeuView>
			</Wrapper>
		</Modal>
	);
};

Notification.propTypes = {
	reappearDelay: PropTypes.number,
	navigationRef: PropTypes.object.isRequired,
};

Notification.defaultProps = {
	reappearDelay: 4000,
};

export default withTheme(Notification);

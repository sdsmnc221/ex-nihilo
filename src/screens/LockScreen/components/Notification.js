import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { NeuView } from 'react-native-neu-element';
import styled from 'styled-components';

import Icon from 'sharedUI/Icon';
import AppIcon from 'sharedUI/AppIcon/';

import { truncate } from 'utils';

import { colors, shadows } from 'configs/theme';

const Wrapper = styled.View`
	width: 100%;
	height: 100px;
	padding: 12px 18px;
	margin-bottom: ${({ withSpacing }) => (withSpacing ? 12 : 0)}px;
	justify-content: center;
	align-items: center;
`;

const Header = styled.View`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 4px;
`;

const Type = styled.View`
	display: flex;
	flex-direction: row;
`;

const TypeText = styled.Text`
	font-size: 11px;
	padding-left: 4px;
`;

const Date = styled.Text`
	font-size: 11px;
`;

const Content = styled.View`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	margin-top: 8px;
	padding-right: 20px;
`;

const ContentTextWrapper = styled.View`
	margin-left: 12px;
`;

const Title = styled.Text`
	font-size: 16px;
	font-weight: bold;
`;

const Message = styled.Text`
	font-size: 14px;
`;

const Notification = ({ withSpacing, type, date, title, message }) => {
	let typeText,
		typeIcon,
		messageText = '';

	switch (type) {
		case 'call':
			typeText = 'appels';
			typeIcon = 'PHONE_XS';
			messageText = 'Appel manqué';
			break;
		case 'message':
			typeText = 'message';
			typeIcon = 'SMS_XS';
			messageText = truncate(message, 24);
			break;
		default:
			break;
	}

	return (
		<Wrapper withSpacing={withSpacing}>
			<NeuView
				width={300}
				height={100}
				color={colors.ghostWhite}
				borderRadius={32}
				style={shadows.default}>
				<Wrapper>
					<Header>
						<Type>
							<Icon type={typeIcon} />
							<TypeText>{typeText}</TypeText>
						</Type>
						<Date>{date}</Date>
					</Header>
					<Content>
						<AppIcon size={40} type="PERSON" />
						<ContentTextWrapper>
							<Title>{title}</Title>
							<Message>{messageText}</Message>
						</ContentTextWrapper>
					</Content>
				</Wrapper>
			</NeuView>
		</Wrapper>
	);
};

Notification.propTypes = {
	withSpacing: PropTypes.bool,
	type: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
};

Notification.defaultProps = {
	withSpacing: true,
	message: '',
};

export default Notification;

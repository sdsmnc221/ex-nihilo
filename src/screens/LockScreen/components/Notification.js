import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styled from 'styled-components';

import PlaceHolder from 'sharedUI/PlaceHolder';

import { truncate } from 'utils';

const Wrapper = styled.View`
	width: 100%;
	height: 90px;
	background-color: #fff;
	padding: 12px 18px;
	margin-bottom: ${({ withSpacing }) => (withSpacing ? 12 : 0)}px;
`;

const Header = styled.View`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const Type = styled.View`
	display: flex;
	flex-direction: row;
`;

const TypeText = styled.Text`
	font-size: 10px;
	padding-left: 4px;
`;

const Date = styled.Text`
	font-size: 8px;
`;

const Content = styled.View`
	width: 90%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	margin-top: 8px;
`;

const ContentTextWrapper = styled.View`
	margin-left: 12px;
`;

const Title = styled.Text`
	font-size: 12px;
	font-weight: bold;
`;

const Message = styled.Text`
	font-size: 10px;
`;

const Notification = ({ withSpacing, type, date, title, message }) => {
	let typeText,
		messageText = '';

	switch (type) {
		case 'call':
			typeText = 'Appels';
			messageText = 'Appel manqué';
			break;
		case 'message':
			typeText = 'Messages';
			messageText = truncate(message);
			break;
		default:
			break;
	}

	return (
		<Wrapper withSpacing={withSpacing}>
			<Header>
				<Type>
					<PlaceHolder size={12} />
					<TypeText>{typeText}</TypeText>
				</Type>
				<Date>{date}</Date>
			</Header>
			<Content>
				<PlaceHolder size={36} />
				<ContentTextWrapper>
					<Title>{title}</Title>
					<Message>{messageText}</Message>
				</ContentTextWrapper>
			</Content>
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

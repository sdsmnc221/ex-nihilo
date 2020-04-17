import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';

import PlaceHolder from '../PlaceHolder';

import { truncate } from '../../utils';

const Wrapper = styled.TouchableOpacity`
	width: 100%;
	height: 50px;
	background-color: #fff;
	margin-bottom: ${({ withSpacing }) => (withSpacing ? 36 : 0)}px;
	padding: 12px 36px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const Content = styled.View`
	width: 90%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	margin-left: 16px;
	margin-top: 2px;
`;

const Date = styled.Text`
	font-size: 10px;
	color: #c4c4c4;
`;

const Title = styled.Text`
	font-size: 13px;
	font-weight: bold;
`;

const Message = styled.Text`
	font-size: 10px;
`;

const EmailShort = ({ sender, date, title, message, starred, onPress }) => {
	return (
		<Wrapper onPress={onPress}>
			<PlaceHolder color="#c4c4c4" size={50} round />
			<Content>
				<Title>{title}</Title>
				<Message>{truncate(message, 48)}</Message>
				<Date>{date}</Date>
			</Content>
		</Wrapper>
	);
};

EmailShort.propTypes = {
	date: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	starred: PropTypes.bool,
	onPress: PropTypes.func,
};

EmailShort.defaultProps = {
	message: '',
	starred: false,
	onPress: () => {},
};

export default EmailShort;

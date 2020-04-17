import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';

import PlaceHolder from '../PlaceHolder';

import { truncate } from '../../utils';
import Icon from '../Icon';
import IconButton from '../Button/IconButton';

const Wrapper = styled.TouchableOpacity`
	width: 100%;
	height: 50px;
	background-color: #fff;
	margin-bottom: 24px;
	padding: 0 24px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
`;

const Content = styled.View`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	margin-left: 24px;
`;

const Sender = styled.Text`
	font-size: 13px;
	top: -4px;
`;

const Title = styled.Text`
	font-size: 10px;
`;

const Message = styled.Text`
	font-size: 10px;
`;

const Side = styled.View`
	height: 100%;
	justify-content: center;
	align-items: center;
`;

const Date = styled.Text`
	font-size: 10px;
	color: #c4c4c4;
	margin-bottom: 4px;
`;

const StarButtonWrapper = styled.TouchableOpacity`
	width: 20px;
	height: 20px;
	justify-content: center;
	align-items: center;
`;

const EmailShort = ({ sender, date, title, message, starred, onPress }) => {
	const [active, setActive] = useState(starred);
	const onPressStarButton = () => setActive(!active);

	return (
		<Wrapper onPress={onPress}>
			<PlaceHolder color="#c4c4c4" size={35} round />
			<Content>
				<Sender>{sender}</Sender>
				<Title>{title}</Title>
				<Message>{truncate(message, 48)}</Message>
			</Content>
			<Side>
				<Date>{date}</Date>
				<IconButton
					type={`STAR${active ? '' : '_OUTLINE'}`}
					size={20}
					onPress={onPressStarButton}
					pressOpacity={1.0}
				/>
			</Side>
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

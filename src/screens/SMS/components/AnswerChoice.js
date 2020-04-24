import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Wrapper = styled.TouchableOpacity`
	width: 88%;
	height: 22%;
	margin: 12px 0;
	background-color: ${({ active }) => (!active ? '#c4c4c4' : '#818181')};
	justify-content: center;
	align-items: center;
`;

const Choice = styled.Text`
	font-size: 13px;
	font-weight: bold;
	color: ${({ active }) => (!active ? '#565656' : '#e5e5e5')};
`;

const AnswerChoice = ({ index, active, text, onPressChoice }) => (
	<Wrapper
		active={active}
		activeOpacity={0.8}
		onPress={() => onPressChoice(index)}>
		<Choice active={active}>{text}</Choice>
	</Wrapper>
);

AnswerChoice.propTypes = {
	index: PropTypes.number.isRequired,
	active: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
	onPressChoice: PropTypes.func,
};

AnswerChoice.defaultProps = {
	onPressChoice: () => {},
};

export default AnswerChoice;

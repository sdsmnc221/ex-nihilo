import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Wrapper = styled.TouchableOpacity`
	width: 88%;
	margin: 6px 0;
	padding: 16px 12px;
	border-radius: 13px;
	background-color: ${({ active, theme }) =>
		!active ? theme.colors.ghostWhite : theme.colors.slateBlue};
	${({ theme }) => theme.styles.flexWithoutSize()};
`;

const Choice = styled.Text`
	${({ theme }) => theme.styles.os.smsText}
	color: ${({ active, theme }) =>
		!active ? theme.colors.charcoal : theme.colors.ghostWhite};
`;

const AnswerChoice = ({ index, active, text, onPressChoice, theme }) => (
	<Wrapper
		active={active}
		activeOpacity={0.8}
		onPress={() => onPressChoice(index)}
		style={theme.shadows.smsMessage}>
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

export default withTheme(AnswerChoice);

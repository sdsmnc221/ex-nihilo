import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import theme from 'configs/theme';

const { cairo, sourceSans, superclarendon } = theme.fonts;

const Wrapper = styled.TouchableOpacity`
	width: 88%;
	height: 22%;
	margin: 12px 0;
	background-color: ${({ active }) => (!active ? '#c4c4c4' : '#818181')};
	justify-content: center;
	align-items: center;
`;

/*
 * Example of how to use custom fonts:
 *
 * 00. Import fonts from theme (configs/theme)
 * 01. DO NOT USE font-weight, font-style etc., as
 * 	   the imported fonts already have their own weight
 * 	   and style.
 * 02. Use font-family like normal CSS.
 */
const Choice = styled.Text`
	font-size: 13px;
	/* font-weight: bold; */
	font-family: ${sourceSans.italic};
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

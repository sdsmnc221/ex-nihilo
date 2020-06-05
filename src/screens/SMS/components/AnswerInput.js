import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { DEFAULT_USERNAME } from 'hooks/DialogueManager/configs';
import { updateUsername } from 'states/actions/storyActions';

const Wrapper = styled.View`
	position: absolute;
	height: 100%;
	${({ theme }) => theme.styles.flex(null, null, null, true)};
	background-color: ${({ theme }) => theme.colors.slateBlue};
`;

const Input = styled.TextInput`
	width: 64%;
	padding: 14px 26px;
	border-radius: 50px;
	text-align: center;
	background-color: ${({ theme }) => theme.colors.ghostWhite};
	border: 2px solid ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.charcoal};
	${({ theme }) => theme.styles.os.input}
`;

const AnswerInput = ({ onSubmit, theme }) => {
	const dispatch = useDispatch();

	const [inputValue, setInputValue] = useState('');

	const onInputValue = (text) => setInputValue(text);
	const onSubmitValue = () => {
		updateUsername(dispatch, inputValue || DEFAULT_USERNAME);
		onSubmit();
	};

	return (
		<Wrapper>
			<Input
				blurOnSubmit
				onChangeText={onInputValue}
				onSubmitEditing={onSubmitValue}
				value={inputValue}
				style={theme.shadows.smsMessage}
			/>
		</Wrapper>
	);
};

AnswerInput.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

AnswerInput.defaultProps = {};

export default withTheme(AnswerInput);

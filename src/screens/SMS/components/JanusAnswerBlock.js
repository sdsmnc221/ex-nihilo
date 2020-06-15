import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import SmsInput from './SmsInput';
import AnswerChoice from './AnswerChoice';
import AnswerInput from './AnswerInput';

import useKeyBoard from 'hooks/useKeyboard';
import { STORY_TYPES } from 'hooks/DialogueManager/configs';
import {
	isInputAction,
	replaceWithUsername,
} from 'hooks/DialogueManager/utils';
import { rgba } from 'utils';

const Wrapper = styled.View`
	height: 36%;
	width: 100%;
	top: ${({ keyboardShown }) => (keyboardShown ? 50 : 0)}px;
`;

const ChoicesWrapper = styled.View`
	position: relative;
	flex: 1;
	background-color: ${({ theme }) => rgba(theme.colors.charcoalAlpha, 0.451)};
	${({ theme }) => theme.styles.flex(null, null, null, true)}
`;

const NoChoiceText = styled.Text`
	font-family: ${({ theme }) => theme.fonts.sourceSans.light};
	font-size: ${({ theme }) => theme.typo.sizes.body};
	color: ${({ theme }) => theme.colors.charcoal};
	letter-spacing: 0.2px;
	top: -4px;
`;

const NoChoice = () => (
	<NoChoiceText>Pas de réponses disponibles pour le moment.</NoChoiceText>
);

const renderChoicesContent = (
	{ type, choices, activeChoiceIndex },
	username,
	onPressChoice,
	onPressChoiceInput
) => {
	let content = <NoChoice />;

	const onPressChoiceActionInput = (i) => {
		onPressChoice(i);
		onPressChoiceInput();
	};

	switch (type) {
		case STORY_TYPES.MESSAGE_AFTER_BREAKPOINT:
		case STORY_TYPES.MESSAGE_WITH_CHOICES:
			content = choices.map((c, i) => {
				if (isInputAction(c) && username) {
					c.changeText(replaceWithUsername(c.text, username, true));
				}

				return (
					<AnswerChoice
						key={i}
						index={i}
						active={i === activeChoiceIndex}
						text={c.text}
						onPressChoice={
							isInputAction(c) && !username ? onPressChoiceActionInput : onPressChoice
						}
					/>
				);
			});
			break;
		default:
			break;
	}

	return content;
};

const JanusAnswerBlock = ({ userAction, onPressChoice, onPressSend }) => {
	const { keyboardShown } = useKeyBoard();

	const { username } = useSelector((state) => state.story);
	const { choices, activeChoiceIndex } = userAction;

	const [inputShown, setInputShown] = useState(false);
	const onPressChoiceInput = () => setInputShown(true);
	const onSubmitInput = () => setInputShown(false);

	return (
		<Wrapper keyboardShown={keyboardShown}>
			<SmsInput
				choice={choices ? choices[activeChoiceIndex] : undefined}
				onPressSend={onPressSend}
			/>
			<ChoicesWrapper>
				{renderChoicesContent(
					userAction,
					username,
					onPressChoice,
					onPressChoiceInput
				)}
			</ChoicesWrapper>
			{inputShown && <AnswerInput onSubmit={onSubmitInput} />}
		</Wrapper>
	);
};

JanusAnswerBlock.propTypes = {
	userAction: PropTypes.object.isRequired,
	onPressChoice: PropTypes.func.isRequired,
	onPressSend: PropTypes.func.isRequired,
};

JanusAnswerBlock.defaultProps = {};

export default withTheme(JanusAnswerBlock);

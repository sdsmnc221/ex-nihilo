import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { View, Text } from 'react-native';

import SmsInput from './SmsInput';
import AnswerChoice from './AnswerChoice';

import { rgba } from 'utils';

const Wrapper = styled.View`
	height: 36%;
	width: 100%;
`;

const ChoicesWrapper = styled.View`
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
	onPressChoice
) => {
	let content = <NoChoice />;

	switch (type) {
		case 'MESSAGE_WITH_CHOICES':
			content = choices.map((c, i) => (
				<AnswerChoice
					key={i}
					index={i}
					active={i === activeChoiceIndex}
					text={c.text}
					onPressChoice={onPressChoice}
				/>
			));
			break;
		case 'INPUT':
		case 'MESSAGE':
		default:
			break;
	}

	return content;
};

const JanusAnswerBlock = ({ userAction, onPressChoice, onPressSend }) => {
	const { choices, activeChoiceIndex } = userAction;

	return (
		<Wrapper>
			<SmsInput
				choice={choices ? choices[activeChoiceIndex] : undefined}
				onPressSend={onPressSend}
			/>
			<ChoicesWrapper>
				{renderChoicesContent(userAction, onPressChoice)}
			</ChoicesWrapper>
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

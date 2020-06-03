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
	font-size: 11px;
	color: #818181;
`;

const NoChoice = () => (
	<NoChoiceText>Pas de réponses disponibles pour le moment.</NoChoiceText>
);

const ChoicesContent = ({ script, activeChoiceIndex, onPressChoice }) => {
	let content;

	switch (script.type) {
		case 'MESSAGE_WITH_CHOICES':
			content = script.choices.map((c, i) => (
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
			content = <NoChoice />;
			break;
		case 'MESSAGE':
		default:
			content = <NoChoice />;
			break;
	}

	return content;
};

ChoicesContent.propTypes = {};

ChoicesContent.defaultProps = {};

const JanusAnswerBlock = ({
	choices,
	activeChoiceIndex,
	activeScript,
	onPressSend,
	onPressChoice,
}) => (
	<Wrapper>
		<SmsInput
			choice={choices ? choices[activeChoiceIndex] : undefined}
			onPressSend={choices ? onPressSend : undefined}
		/>
		<ChoicesWrapper>
			<ChoicesContent
				script={activeScript}
				activeChoiceIndex={activeChoiceIndex}
				onPressChoice={onPressChoice}
			/>
		</ChoicesWrapper>
	</Wrapper>
);

JanusAnswerBlock.propTypes = {};

JanusAnswerBlock.defaultProps = {};

export default withTheme(JanusAnswerBlock);

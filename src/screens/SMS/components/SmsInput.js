import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import IconButton from 'sharedUI/Button/IconButton';

import { rgba } from 'utils';
import { SIZES } from 'configs';

const Wrapper = styled.View`
	position: relative;
	width: 100%;
	height: ${SIZES.SMS_INPUT_H}px;
`;

const InputField = styled.TextInput`
	width: 100%;
	height: 100%;
	padding: 0 20px;
	${({ theme }) => theme.styles.flexWithoutSize()}
	${({ theme }) => theme.styles.os.body}
	letter-spacing: 0.19px;
	background-color: ${({ theme }) => rgba(theme.colors.charcoalAlpha, 0.451)};
	color: ${({ theme }) => theme.colors.ghostWhite};
`;

const sendButtonStyle = css`
	position: absolute;
	top: 14px;
	right: 20px;
`;

const SmsInput = ({ choice, onPressSend, theme }) => (
	<Wrapper>
		<InputField editable={false} value={choice?.text || 'Écrire un SMS...'} />
		<IconButton
			type="SEND"
			color={theme.colors.white}
			width={14.3}
			height={20.06}
			noBlink={onPressSend === undefined}
			onPress={onPressSend === undefined ? () => {} : () => onPressSend(choice)}
			additionalStyle={`${sendButtonStyle}`}
		/>
	</Wrapper>
);

SmsInput.propTypes = {
	choice: PropTypes.object,
	onPressSend: PropTypes.func,
};

SmsInput.defaultProps = {
	choice: undefined,
	onPressSend: undefined,
};

export default withTheme(SmsInput);

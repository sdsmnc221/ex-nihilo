import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import StyledIcon from 'sharedUI/Icon/StyledIcon';

import { rgba, truncate } from 'utils';
import { SIZES } from 'configs';

const Wrapper = styled.TouchableOpacity`
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

const SmsInput = ({ choice, onPressSend, theme }) => (
	<Wrapper
		activeOpacity={onPressSend === undefined ? 1.0 : 0.8}
		onPress={() => (onPressSend === undefined ? {} : onPressSend(choice))}>
		<InputField
			editable={false}
			value={(choice && truncate(choice.text, 48)) || 'Écrire un SMS...'}
		/>
		<StyledIcon
			type="SEND"
			width={14.3}
			height={20.06}
			additionalStyle={css`
				position: absolute;
				top: 14px;
				right: 20px;
			`}
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

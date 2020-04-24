import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import IconButton from 'sharedUI/Button/IconButton';

const Wrapper = styled.View`
	position: relative;
`;

const InputField = styled.TextInput`
	height: 44px;
	padding: 0 18px;
	background-color: #c4c4c4;
	color: #818181;
	font-size: 10px;
`;

const styles = StyleSheet.create({
	sendIcon: {
		position: 'absolute',
		right: 12,
		top: 12,
	},
});

const SmsInput = ({ text, onPressSend }) => (
	<Wrapper>
		<InputField editable={false} value={text} />
		<IconButton
			type="SEND"
			noBlink={onPressSend === undefined}
			onPress={onPressSend === undefined ? () => {} : () => onPressSend(text)}
			additionalStyles={styles.sendIcon}
		/>
	</Wrapper>
);

SmsInput.propTypes = {
	text: PropTypes.string,
	onPressSend: PropTypes.func,
};

SmsInput.defaultProps = {
	text: 'Écrire un SMS...',
	onPressSend: undefined,
};

export default SmsInput;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from '../Icon';

const Wrapper = styled.View`
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
`;

const IconWrapper = styled.View`
	margin-bottom: 32px;
`;

const Title = styled.Text`
	margin-bottom: 12px;
	font-size: 14px;
	font-weight: bold;
	color: ${({ color }) => color};
`;

const Input = styled.TextInput`
	width: 64%;
	background-color: #e8e8e8;
	font-size: 12px;
	text-align: center;
	padding: 8px;
`;

const Hint = styled.Text`
	width: 64%;
	font-size: 11px;
	margin-top: 12px;
	text-align: center;
	color: ${({ color }) => color};
`;

const PasswordLock = ({
	hintEnabled,
	hint,
	color,
	passwordInput,
	onInputPassword,
	onSubmitPassword,
}) => {
	return (
		<Wrapper>
			<IconWrapper>
				<Icon type="LOCK" color={color} />
			</IconWrapper>
			<Title color={color}>Entrer le mot de passe</Title>
			<Input
				secureTextEntry
				blurOnSubmit
				onChangeText={onInputPassword}
				onSubmitEditing={onSubmitPassword}
				value={passwordInput}
			/>
			{hintEnabled && <Hint color={color}>{hint}</Hint>}
		</Wrapper>
	);
};

PasswordLock.propTypes = {
	hintEnabled: PropTypes.bool,
	hint: PropTypes.string,
	color: PropTypes.string,
	passwordInput: PropTypes.string,
	onInputPassword: PropTypes.func,
	onSubmitPassword: PropTypes.func,
};

PasswordLock.defaultProps = {
	hintEnabled: false,
	hint: undefined,
	color: '#000',
	passwordInput: '',
	onInputPassword: () => {},
	onSubmitPassword: () => {},
};

export default PasswordLock;

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { View, Text } from 'react-native';

import StyledIcon from 'sharedUI/Icon/StyledIcon';

const Wrapper = styled.View`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
	margin-right: ${({ isUser }) => (isUser ? 24 : 0)}px;
	margin-left: ${({ isUser }) => (isUser ? 0 : 24)}px;
	margin-bottom: ${({ withSpacing }) => (withSpacing ? 12 : 0)}px;
`;

const SmsText = styled.Text`
	max-width: 60%;
	${({ theme }) => theme.styles.os.smsText}
	background-color: ${({ theme }) => theme.colors.ghostWhite};
	color: ${({ isUser, theme }) =>
		isUser ? theme.colors.slateBlue : theme.colors.charcoal};
	padding: 14px 12px;
	margin-bottom: ${({ withAvatar }) => (withAvatar ? 0 : 12)}px;
	margin-left: ${({ isUser, withAvatar }) =>
		isUser ? 0 : withAvatar ? 8 : 48}px;
	border-radius: 12px;
	border-left-color: ${({ theme }) => theme.colors.white};
	border-left-width: 0.6px;
	border-top-color: ${({ theme }) => theme.colors.white};
	border-top-width: 1.2px;
`;

const avatarStyle = css`
	border-radius: 100px;
	border: 1px solid ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.ghostWhite};
`;

const SmsMessage = ({ isUser, withAvatar, withSpacing, message, theme }) => (
	<Wrapper isUser={isUser} withSpacing={withSpacing}>
		{withAvatar && (
			<StyledIcon
				type="PERSON"
				size={40}
				width={16.17}
				height={21.22}
				additionalStyle={avatarStyle}
			/>
		)}
		<SmsText
			isUser={isUser}
			withAvatar={withAvatar}
			style={theme.shadows.smsMessage}>
			{message}
		</SmsText>
	</Wrapper>
);

SmsMessage.propTypes = {
	isUser: PropTypes.bool,
	withAvatar: PropTypes.bool,
	withSpacing: PropTypes.bool,
	message: PropTypes.string.isRequired,
};

SmsMessage.defaultProps = {
	isUser: false,
	withAvatar: false,
	withSpacing: false,
};

export default withTheme(SmsMessage);

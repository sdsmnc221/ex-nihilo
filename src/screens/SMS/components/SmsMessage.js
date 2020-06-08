import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { View, Text, Image } from 'react-native';

import StyledIcon from 'sharedUI/Icon/StyledIcon';

import { device } from 'utils';

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

const ImageWrapper = styled.View`
	background-color: ${({ theme }) => theme.colors.ghostWhite};
	padding: 14px;
	margin-bottom: ${({ withAvatar }) => (withAvatar ? 0 : 12)}px;
	margin-left: ${({ isUser, withAvatar }) =>
		isUser ? 0 : withAvatar ? 8 : 48}px;
	border-radius: 12px;
	border-left-color: ${({ theme }) => theme.colors.white};
	border-left-width: 0.6px;
	border-top-color: ${({ theme }) => theme.colors.white};
	border-top-width: 1.2px;
`;

const SmsMessage = ({
	isUser,
	withAvatar,
	withSpacing,
	message,
	type,
	theme,
}) => (
	<Wrapper isUser={isUser} withSpacing={withSpacing}>
		{withAvatar && (
			<StyledIcon
				type="PERSON"
				size={40}
				width={16.17}
				height={21.22}
				additionalStyle={theme.styles.avatar()}
			/>
		)}
		{type === 'text' ? (
			<SmsText
				isUser={isUser}
				withAvatar={withAvatar}
				style={theme.shadows.smsMessage}>
				{message}
			</SmsText>
		) : (
			<ImageWrapper style={theme.shadows.smsMessage}>
				<Image
					css={css`
						width: ${device().width * 0.46}px;
						height: ${device().height * 0.36}px;
						border: 1px solid ${theme.colors.slateBlue};
					`}
					resizeMode="cover"
					source={{ uri: message }}
				/>
			</ImageWrapper>
		)}
	</Wrapper>
);

SmsMessage.propTypes = {
	isUser: PropTypes.bool,
	withAvatar: PropTypes.bool,
	withSpacing: PropTypes.bool,
	message: PropTypes.string.isRequired,
	type: PropTypes.string,
};

SmsMessage.defaultProps = {
	isUser: false,
	withAvatar: false,
	withSpacing: false,
	type: 'text',
};

export default withTheme(SmsMessage);

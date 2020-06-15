import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import StyledIcon from 'sharedUI/Icon/StyledIcon';

import { flatten, rgba, tick } from 'utils';
import { NUMBERS } from 'configs';

const Wrapper = styled.View`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
	margin-right: ${({ isUser }) => (isUser ? 24 : 0)}px;
	margin-left: ${({ isUser }) => (isUser ? 0 : 24)}px;
	margin-bottom: ${({ withSpacing }) => (withSpacing ? 12 : 0)}px;
`;

const TextWrapper = styled.TouchableOpacity`
	max-width: 60%;
	background-color: ${({ theme }) => theme.colors.ghostWhite};
	padding: 14px 12px;
	margin-bottom: ${({ withAvatar }) => (withAvatar ? 0 : 12)}px;
	margin-left: ${({ isUser, withAvatar }) =>
		isUser ? 0 : withAvatar ? 8 : 48}px;
	border-radius: 12px;
	border-left-color: ${({ hasAction, theme }) =>
		hasAction ? rgba(theme.colors.limeAlpha, 0.2) : theme.colors.white};
	border-left-width: 0.6px;
	border-top-color: ${({ hasAction, theme }) =>
		hasAction ? rgba(theme.colors.limeAlpha, 0.2) : theme.colors.white};
	border-top-width: 1.2px;
	${({ hasAction, theme }) =>
		hasAction &&
		css`
			border-right-width: 0.6px;
			border-bottom-width: 0.6px;
			border-right-color: ${rgba(theme.colors.limeAlpha, 0.2)};
			border-bottom-color: ${rgba(theme.colors.limeAlpha, 0.2)};
		`}
`;

const SmsText = styled.Text`
	${({ theme }) => theme.styles.os.smsText}
	color: ${({ isUser, theme }) =>
		isUser ? theme.colors.slateBlue : theme.colors.charcoal};
`;

const SmsTextCapital = styled.Text`
	${({ theme }) => theme.styles.os.smsTextBold}
	color: ${({ theme }) => theme.colors.slateBlue};
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
	data,
	type,
	smsActionType,
	theme,
}) => {
	const [modifiedTextData, setModifiedTextData] = useState(false);

	const onPressText = () => setModifiedTextData(true);

	const renderEmphasizeText = () => {
		if (type === 'text') {
			// Split Each Text / Poem's line to Capital letter, following letters, and \n
			const data_ = data
				.split('\n\n')
				.map((paragraph) => [...paragraph.split('\n')])
				.map((verse) =>
					verse.map((v) => (v !== '\n\n' ? [v[0], v.slice(1), '\n'] : v))
				);

			return (
				<Text>
					{flatten(data_, 2).map((text, index) =>
						text.length === 1 ? (
							<SmsTextCapital key={index}>{text}</SmsTextCapital>
						) : (
							<SmsText key={index} isUser={isUser}>
								{text}
							</SmsText>
						)
					)}
				</Text>
			);
		}
	};

	useEffect(() => {
		if (modifiedTextData) {
			tick(() => setModifiedTextData(false), NUMBERS.RESET_ACTION_SMS_DURATION);
		}
	}, [modifiedTextData]);

	return (
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
				<TextWrapper
					activeOpacity={smsActionType ? 0.8 : 1}
					onPress={smsActionType ? onPressText : () => {}}
					isUser={isUser}
					withAvatar={withAvatar}
					style={theme.shadows.smsMessage}
					hasAction={smsActionType}>
					{modifiedTextData ? renderEmphasizeText() : <SmsText>{data}</SmsText>}
				</TextWrapper>
			) : (
				<ImageWrapper
					style={
						modifiedTextData
							? theme.shadows.smsActionMessage
							: theme.shadows.smsMessage
					}>
					<Image
						css={css`
							width: ${data.size.width * 0.48}px;
							height: ${data.size.height * 0.48}px;
							border-width: 1.4px;
							border-color: ${theme.colors.slateBlue};
						`}
						resizeMode="cover"
						source={{ uri: data.url }}
					/>
				</ImageWrapper>
			)}
		</Wrapper>
	);
};
SmsMessage.propTypes = {
	isUser: PropTypes.bool,
	withAvatar: PropTypes.bool,
	withSpacing: PropTypes.bool,
	data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
	type: PropTypes.string,
	smsActionType: PropTypes.string,
};

SmsMessage.defaultProps = {
	isUser: false,
	withAvatar: false,
	withSpacing: false,
	type: 'text',
	smsActionType: null,
};

export default memo(withTheme(SmsMessage));

import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme, css } from 'styled-components';
import { View, Text } from 'react-native';
import { NeuView } from 'utils/react-native-neu-element';

import FlexDiv from 'sharedUI/FlexDiv';
import Icon from 'sharedUI/Icon';
import AppIcon from 'sharedUI/AppIcon';

import { truncate } from 'utils';

const Wrapper = styled.View`
	padding: 8px 20px;
	${({ theme }) => theme.styles.flex('center', 'center', 'column', true)}
`;

const Subtitle = styled.Text`
	color: ${({ theme }) => theme.colors.charcoal};
	line-height: ${({ theme }) => theme.typo.sizesNb.subtitle - 1}px;
	letter-spacing: 0.19px;
	${({ theme }) => theme.styles.os.subtitle};
`;

const Title = styled.Text`
	margin-bottom: 4px;
	color: ${({ theme }) => theme.colors.charcoal};
	letter-spacing: 0.27px;
	${({ theme }) => theme.styles.os.h3};
`;

const Message = styled.Text`
	color: ${({ theme }) => theme.colors.charcoal};
	letter-spacing: 0.23px;
	line-height: 15px;
	${({ theme }) => theme.styles.os.body};
`;

const Notification = ({ theme, type, date, title, message }) => {
	let typeText,
		typeIcon,
		messageText = '';

	switch (type) {
		case 'call':
			typeText = 'appels';
			typeIcon = 'PHONE_XS';
			messageText = 'Appel manqué';
			break;
		case 'message':
			typeText = 'message';
			typeIcon = 'SMS_XS';
			messageText = truncate(message, 24);
			break;
		default:
			break;
	}

	return (
		<Wrapper>
			<NeuView
				width={300}
				height={100}
				color={theme.colors.ghostWhite}
				borderRadius={24}
				style={theme.shadows.notificationShadow}
				{...theme.shadows.notification}>
				<Wrapper>
					{/* HEADER */}
					<FlexDiv
						direction="row"
						justifyContent="space-between"
						fullWidth
						additionalStyle={css`
							margin-bottom: 8px;
						`}>
						<FlexDiv direction="row">
							<Icon type={typeIcon} />
							<Subtitle
								css={`
									${css`
										padding-left: 4px;
									`}
								`}>
								{typeText}
							</Subtitle>
						</FlexDiv>
						<Subtitle>{date}</Subtitle>
					</FlexDiv>

					{/* Content */}
					<FlexDiv direction="row" justifyContent="flex-start" fullWidth>
						<AppIcon size={45} type="PERSON" noBlink />
						<View
							css={css`
								margin-left: 12px;
							`}>
							<Title>{truncate(title, 20)}</Title>
							<Message>{messageText}</Message>
						</View>
					</FlexDiv>
				</Wrapper>
			</NeuView>
		</Wrapper>
	);
};

Notification.propTypes = {
	type: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
};

Notification.defaultProps = {
	message: '',
};

export default withTheme(Notification);

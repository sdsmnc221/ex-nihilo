import React from 'react';
import styled, { css, withTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import FlexDiv from 'sharedUI/FlexDiv';
import StarButton from 'sharedUI/Button/StarButton';
import StyledIcon from 'sharedUI/Icon/StyledIcon';

import { device, rgba, replaceTemplate, truncate } from 'utils';
import { SCREENS, STRINGS, FAKE_PHOTO_MAIL_TEMPLATE } from 'configs';

const { EMAIL_CONTENT_TYPES } = STRINGS;

const Header = styled.View`
	${({ theme }) => theme.styles.flex('space-between', 'flex-start', 'row', true)}
	margin-bottom: 28px;
`;

const SubHeader = styled.View`
	${({ theme }) => theme.styles.flex(null, null, 'row', true)}
`;

const Content = styled.View`
	margin-top: 28px;
	width: 100%;
	flex: 1;
`;

const Title = styled.Text`
	${({ theme }) => theme.styles.os.h3_alt}
	color: ${({ theme }) => theme.colors.charcoal};
	letter-spacing: 0.34px;
`;

const Category = styled.Text`
	background-color: ${({ theme }) => theme.colors.persianRed};
	color: ${({ theme }) => theme.colors.ghostWhite};
	font-family: ${({ theme }) => theme.fonts.cairo.semiBold};
	font-size: ${({ theme }) => theme.typo.sizes.subtitle};
	letter-spacing: 0.2px;
	padding: 4px 8px;
	margin-top: 8px;
`;

const Sender = styled.Text`
	${({ theme }) => theme.styles.os.h3_alt}
	color: ${({ theme }) => theme.colors.charcoal};
	line-height: 16px;
	padding-top: 10px;
`;

const Recipient = styled.Text`
	color: ${({ theme }) => theme.colors.charcoal};
	font-family: ${({ theme }) => theme.fonts.cairo.light};
	font-size: 12px;
	letter-spacing: 0.2px;
	line-height: 16px;
	padding-top: 2px;
`;

const Date = styled.Text`
	color: ${({ theme }) => theme.colors.charcoal};
	font-family: ${({ theme }) => theme.fonts.cairo.extraLight};
	font-size: ${({ theme }) => theme.typo.sizes.subtitle};
	letter-spacing: 0.2px;
	margin-bottom: 20px;
`;

const Message = styled.Text`
	padding-top: 4px;
	${({ theme }) => theme.styles.os.body_alt}
	letter-spacing: 0.24px;
	line-height: 16px;
`;

const MessageBold = styled.Text`
	padding-top: 4px;
	${({ theme }) => theme.styles.os.body_alt_bold}
	letter-spacing: 0.24px;
	line-height: 16px;
`;

const MessageLink = styled.Text`
	padding-top: 4px;
	${({ theme }) => theme.styles.os.body_alt}
	letter-spacing: 0.24px;
	line-height: 16px;
	color: ${({ theme }) => theme.colors.slateBlue};
	text-decoration: underline;
`;

const MessageList = styled.Text`
	padding: 4px 24px 0 24px;
	${({ theme }) => theme.styles.os.body_alt}
	letter-spacing: 0.24px;
	line-height: 16px;
`;

const EmailDetailsScreen = ({ route, navigation, theme }) => {
	const { email } = route.params;
	const { object, from, to, formatDate, content, star } = email;

	const { gps } = useSelector((state) => state.deviceData);
	const { lat, long, address } = gps;

	return (
		<LayoutWrapper screenName={route.name}>
			<ScrollView contentContainerStyle={theme.styles.styleSheet.scrollBodyEmail}>
				<Header>
					<FlexDiv alignItems="flex-start">
						<Title>{object}</Title>
						<Category>Boîte de réception</Category>
					</FlexDiv>
					<StarButton
						initialActive={star}
						width={28}
						height={28}
						useImg
						redPress
						noPress
						additionalStyle={css`
							top: 10px;
						`}
					/>
				</Header>
				<SubHeader>
					<StyledIcon
						type="PERSON"
						size={48}
						width={24}
						height={24}
						additionalStyle={theme.styles.avatar(
							rgba(theme.colors.persianRedAlpha, 0.4),
							theme.colors.white
						)}
					/>
					<FlexDiv
						alignItems="flex-start"
						additionalStyle={css`
							flex: 1;
							margin-left: 8px;
						`}>
						<Sender>{from}</Sender>
						<Recipient>{truncate(`à ${to.join(', ')}`, 80)}</Recipient>
					</FlexDiv>
					<Date>{formatDate}</Date>
				</SubHeader>
				<Content>
					{content.map(({ type, content: data }, i) => {
						switch (type) {
							case EMAIL_CONTENT_TYPES.BOLD:
								return <MessageBold key={i}>{data}</MessageBold>;
							case EMAIL_CONTENT_TYPES.IMAGE:
								return (
									<Image
										key={i}
										css={css`
											width: ${device().width * 0.86}px;
											height: ${device().height * 0.36}px;
											margin-bottom: 12px;
										`}
										resizeMode="contain"
										source={{ uri: replaceTemplate(FAKE_PHOTO_MAIL_TEMPLATE, data) }}
									/>
								);
							case EMAIL_CONTENT_TYPES.LINK:
								return <MessageLink key={i}>{data}</MessageLink>;
							case EMAIL_CONTENT_TYPES.LINK_WIKIHOW:
								return (
									<TouchableOpacity
										key={i}
										activeOpacity={0.6}
										onPress={() => navigation.navigate(SCREENS.INTERNET)}>
										<MessageLink>{data}</MessageLink>
									</TouchableOpacity>
								);
							case EMAIL_CONTENT_TYPES.LIST:
								return <MessageList key={i}>{data}</MessageList>;
							case EMAIL_CONTENT_TYPES.PLACEHOLDER_GPS:
								return (
									<MessageBold key={i}>
										{replaceTemplate(data, `{{ [${lat}, ${long}] - ${address} }}`)}
									</MessageBold>
								);
							case EMAIL_CONTENT_TYPES.TEXT:
								return <Message key={i}>{data}</Message>;
							default:
								return null;
						}
					})}
				</Content>
			</ScrollView>
		</LayoutWrapper>
	);
};

export default withTheme(EmailDetailsScreen);

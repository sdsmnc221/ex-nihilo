import React from 'react';
import styled, { css, withTheme } from 'styled-components';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import FillGap from 'sharedUI/FillGap';
import StarButton from 'sharedUI/Button/StarButton';
import StyledIcon from 'sharedUI/Icon/StyledIcon';

import { rgba } from 'utils';
import FlexDiv from '../../sharedUI/FlexDiv';

const Header = styled.View`
	${({ theme }) => theme.styles.flex('space-between', 'flex-start', 'row', true)}
	margin-bottom: 16px;
`;

const SubHeader = styled.View`
	${({ theme }) => theme.styles.flex('space-between', null, 'row', true)}
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
	letter-spacing: 0.34px;
	top: 2px;
`;

const Recipient = styled.Text`
	color: ${({ theme }) => theme.colors.charcoal};
	font-family: ${({ theme }) => theme.fonts.cairo.light};
	font-size: 12px;
	letter-spacing: 0.2px;
	top: -2px;
`;

const Date = styled.Text`
	color: ${({ theme }) => theme.colors.charcoal};
	font-family: ${({ theme }) => theme.fonts.cairo.extraLight};
	font-size: ${({ theme }) => theme.typo.sizes.subtitle};
	letter-spacing: 0.2px;
	top: 5px;
	left: 10px;
`;

const Message = styled.Text`
	padding-top: 4px;
	${({ theme }) => theme.styles.os.body_alt}
	letter-spacing: 0.24px;
	line-height: 16px;
`;

const EmailDetailsScreen = ({ route, theme }) => {
	const { email } = route.params;
	const { sender, date, title, message, starred } = email;

	return (
		<LayoutWrapper screenName={route.name}>
			<ScrollView contentContainerStyle={theme.styles.styleSheet.scrollBodyEmail}>
				<Header>
					<FlexDiv alignItems="flex-start">
						<Title>{title}</Title>
						<Category>Boîte de réception</Category>
					</FlexDiv>
					<StarButton
						initialActive={starred}
						width={28}
						height={28}
						useImg
						redPress
						additionalStyle={`${css`
							top: 10px;
						`}`}
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
						additionalStyle={`${css`
							flex: 1;
							margin-left: 8px;
						`}`}>
						<FlexDiv direction="row">
							<Sender>{sender}</Sender>
							<Date>{date}</Date>
						</FlexDiv>
						<Recipient>à moi</Recipient>
					</FlexDiv>
				</SubHeader>
				<Content>
					<Message>{message}</Message>
					<Message>{message}</Message>
					<Message>{message}</Message>
					<Message>{message}</Message>
				</Content>
			</ScrollView>
			<FillGap />
		</LayoutWrapper>
	);
};

export default withTheme(EmailDetailsScreen);

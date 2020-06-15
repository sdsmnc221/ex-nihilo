import React from 'react';
import styled, { withTheme, css } from 'styled-components';
import { View, Text } from 'react-native';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import FlexDiv from 'sharedUI/FlexDiv';
import AppIcon from 'sharedUI/AppIcon';
import StarButton from 'sharedUI/Button/StarButton';
import ContactInfo from './components/ContactInfo';

import { CONTACT_DETAILS_APPS, STRINGS } from 'configs';

const Title = styled.Text`
	${({ theme }) => theme.styles.os.h2_alt}
	letter-spacing: 0.46px;
	color: ${({ theme }) => theme.colors.whiskey};
	margin: 24px 0;
`;

const ContactDetailsScreen = ({ route, navigation, theme }) => {
	const { contact } = route.params;
	const { name, star } = contact;

	const INFO = STRINGS.CONTACT_INFO.map(({ title, key }) => ({
		title,
		info: contact[key],
	}));

	return (
		<LayoutWrapper screenName={route.name}>
			<View
				css={`
					${css`
						position: relative;
					`}
				`}>
				<AppIcon
					size={180}
					type="PERSON_XL"
					noBlink
					additionalStyle={css`
						z-index: 0;
						position: relative;
					`}
					{...theme.shadows.softNeomorphism}
				/>
				{star && (
					<StarButton
						initialActive={star}
						noPress
						width={36}
						height={36}
						additionalStyle={css`
							position: absolute;
							top: 24px;
							left: 8px;
						`}
						useImg
					/>
				)}
			</View>
			<Title>{name}</Title>
			<FlexDiv direction="row" fullWidth>
				{CONTACT_DETAILS_APPS.map(({ iconType }, index) => (
					<AppIcon
						key={index}
						size={46}
						type={iconType}
						additionalStyle={css`
							margin: 0 18px;
						`}
					/>
				))}
			</FlexDiv>
			<FlexDiv
				fullWidth
				additionalStyle={css`
					margin-top: 36px;
					margin-bottom: 10%;
					padding: 0 24px;
				`}>
				{INFO.map(({ title, info }, index) => (
					<ContactInfo key={index} title={title} info={info} />
				))}
			</FlexDiv>
		</LayoutWrapper>
	);
};

export default withTheme(ContactDetailsScreen);

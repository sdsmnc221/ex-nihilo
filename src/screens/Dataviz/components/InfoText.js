import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import { STRINGS } from 'configs';

const { DATAVIZ_TAB_TEXT, DATAVIZ_TAB_BAR } = STRINGS;

const {
	nullText,
	primaryInfoStart,
	primaryInfoEnd,
	secondaryInfoStart,
	secondaryInfoEnd,
} = DATAVIZ_TAB_TEXT;

const Wrapper = styled.View`
	padding: 0 10%;
	${({ theme }) => theme.styles.flex(null, null, null, true)}
`;

const StyledText = styled.Text`
	color: ${({ theme }) => theme.colors.white};
	letter-spacing: 0.54px;
	line-height: 20px;
	${({ theme }) => theme.styles.os.body}
`;

const StyledTextBold = styled.Text`
	color: ${({ colorKey, theme }) => theme.colors[colorKey || 'white']};
	letter-spacing: 0.54px;
	line-height: 20px;
	${({ theme }) => theme.styles.os.bodyBold}
`;

const InfoText = () => {
	const { tabIndex } = useSelector((state) => state.dataviz);
	const { sms, gallery, contacts, calls } = useSelector(
		(state) => state.deviceData
	);

	const deviceInfo = [
		(sms && sms.count) || 0,
		(gallery && gallery.count) || 0,
		(contacts && contacts.length) || 0,
		(calls && calls.length) || 0,
	];

	const textContent = DATAVIZ_TAB_TEXT.info[tabIndex];

	return (
		<Wrapper>
			{!textContent ? (
				<StyledText>{nullText}</StyledText>
			) : (
				<StyledText>
					{primaryInfoStart}
					<StyledTextBold colorKey={DATAVIZ_TAB_BAR[tabIndex].color}>{`${
						deviceInfo[tabIndex]
					} ${textContent.label}`}</StyledTextBold>
					{primaryInfoEnd}
					{secondaryInfoStart}
					<StyledTextBold>{`${textContent.secondary} ${
						textContent.label
					}${textContent.secondarySuffix || ''}`}</StyledTextBold>
					{secondaryInfoEnd}
				</StyledText>
			)}
		</Wrapper>
	);
};

export default InfoText;

import React, { useRef } from 'react';
import styled, { withTheme } from 'styled-components';
import { Text, SectionList } from 'react-native';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import FillGap from 'sharedUI/FillGap';
import SmsMessage from './components/SmsMessage';
import SmsInput from './components/SmsInput';
import Unscrollable from './components/Unscrollable';

import { last } from 'utils';

const Date = styled.Text`
	color: ${({ theme }) => theme.colors.charcoal};
	font-family: ${({ theme }) => theme.fonts.sourceSans.regular};
	font-size: 12px;
	text-transform: uppercase;
	text-align: center;
	margin: 16px 0;
`;

const SmsConversationScreen = ({ route, theme }) => {
	const { sms: SMS } = route.params;
	const { title: headerTitle, content: smsList } = SMS;

	const smsListRef = useRef(null);

	return (
		<LayoutWrapper screenName={route.name} headerTitle={headerTitle}>
			<SectionList
				ref={smsListRef}
				css={`
					${theme.styles.list}
				`}
				sections={smsList}
				keyExtractor={(item, index) => index.toString()}
				onScrollToIndexFailed={() => {}}
				onContentSizeChange={() =>
					smsListRef.current &&
					smsListRef.current.scrollToLocation({
						sectionIndex: smsList.length - 1,
						itemIndex: last(smsList).data.length - 1,
					})
				}
				renderSectionHeader={({ section: { title } }) =>
					title ? <Date>{title}</Date> : null
				}
				renderItem={({ item: sms, index, section }) => (
					<SmsMessage
						type={sms.type}
						data={sms?.data}
						withAvatar={sms.withAvatar}
						isUser={sms.isUser}
						withSpacing={sms.withAvatar && section.data[index + 1]?.isUser}
					/>
				)}
				ListHeaderComponent={<Unscrollable />}
				ListFooterComponent={<FillGap height={18} />}
			/>
			<SmsInput />
			<FillGap />
		</LayoutWrapper>
	);
};

export default withTheme(SmsConversationScreen);

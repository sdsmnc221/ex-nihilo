import React, { useRef } from 'react';
import styled, { withTheme } from 'styled-components';
import { View, Text } from 'react-native';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import SmsMessage from './components/SmsMessage';
import SmsInput from './components/SmsInput';

const SmsList = styled.ScrollView`
	width: 100%;
	background-color: #fff;
`;

const Date = styled.Text`
	font-size: 10px;
	color: #565656;
	text-align: center;
	margin-top: 12px;
`;

const InputField = styled.View`
	width: 100%;
	margin-top: 12px;
`;

const SmsConversationScreen = ({ route, navigation }) => {
	const { headerTitle } = route.params;

	const smsListRef = useRef(null);

	return (
		<LayoutWrapper screenName={route.name} headerTitle={headerTitle}>
			<SmsList
				ref={smsListRef}
				onContentSizeChange={() =>
					smsListRef.current?.scrollToEnd({ animated: true })
				}>
				<SmsMessage message="Lorem ipsum dolor sit amet" />
				<SmsMessage hasPlaceholder message="Lorem ipsum dolor sit amet" />

				<SmsMessage
					isUser
					message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				/>

				<SmsMessage message="Lorem ipsum dolor sit amet" />
				<SmsMessage
					hasPlaceholder
					message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				/>

				<Date>10:42</Date>

				<SmsMessage
					isUser
					message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				/>

				<SmsMessage
					hasPlaceholder
					message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo."
				/>

				<Date>15:12</Date>

				<SmsMessage
					isUser
					message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				/>

				<SmsMessage
					hasPlaceholder
					message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo."
				/>

				<SmsMessage
					hasPlaceholder
					message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo."
				/>
				<SmsMessage
					hasPlaceholder
					message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo."
				/>
				<SmsMessage
					hasPlaceholder
					message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo."
				/>
			</SmsList>
			<InputField>
				<SmsInput />
			</InputField>
		</LayoutWrapper>
	);
};

export default withTheme(SmsConversationScreen);

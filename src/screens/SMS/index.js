import React from 'react';
import { withTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import SmsShort from './components/SmsShort';
import FillGap from 'sharedUI/FillGap';

import { SCREENS } from 'configs';

const SmsScreen = ({ route, navigation, theme }) => {
	const { sms: smsList } = useSelector((state) => state.mergedData);

	return (
		<LayoutWrapper screenName={route.name}>
			<FlatList
				css={`
					${theme.styles.list}
				`}
				data={smsList}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item: sms, index }) => (
					<SmsShort
						id={index}
						date={sms.lastDate}
						title={sms.title}
						message={sms.lastMessage}
						onPress={() =>
							navigation.navigate(
								sms.title === 'Janus' ? SCREENS.SMS_JANUS : SCREENS.SMS_CONVERSATION,
								{
									sms,
								}
							)
						}
					/>
				)}
				ListFooterComponent={<FillGap height={18} />}
			/>
			{/* <FillGap /> */}
		</LayoutWrapper>
	);
};

export default withTheme(SmsScreen);

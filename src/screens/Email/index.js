import React from 'react';
import { withTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import FillGap from 'sharedUI/FillGap';
import EmailShort from './components/EmailShort';

import { SCREENS } from 'configs';

const EmailScreen = ({ route, navigation, theme }) => {
	const { emails } = useSelector((state) => state.fakeData);

	return (
		<LayoutWrapper screenName={route.name}>
			<FlatList
				css={`
					${theme.styles.list}
					padding-top: 20px;
				`}
				data={emails}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item: email }) => (
					<EmailShort
						sender={email.from}
						date={email.formatDate}
						title={email.object}
						message={email.shortMessage}
						starred={email.star}
						onPress={() => navigation.navigate(SCREENS.EMAIL_DETAILS, { email })}
					/>
				)}
				ListFooterComponent={<FillGap height={18} />}
			/>
			<FillGap />
		</LayoutWrapper>
	);
};

export default withTheme(EmailScreen);

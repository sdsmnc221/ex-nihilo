import React from 'react';
import { View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withTheme, css } from 'styled-components';

import AppIcon from 'sharedUI/AppIcon';
import FlexDiv from 'sharedUI/FlexDiv';
import NavigationBar from 'sharedUI/NavigationBar';

import apps from './configs';
import { chunk } from 'utils';

const AllApps = ({ navigation, theme }) => {
	const deviceW = Dimensions.get('window').width;
	const iconSize = (deviceW - 12) / 5 - 12;

	const onPress = (screen) => navigation.navigate(screen);

	const renderAppIcon = ({ label, iconType, screen }, i) => (
		<AppIcon
			key={i}
			label={label}
			type={iconType || 'LOCK'}
			size={iconSize}
			notifs={iconType === 'PHONE' ? 24 : iconType === 'SMS' ? 8 : 0}
			{...screen && { onPress: () => onPress(screen) }}
		/>
	);

	const APPS = chunk(apps, 3);

	return (
		<SafeAreaView>
			<View
				css={`
					${theme.styles.body(null, 'flex-start')}
				`}>
				<View
					css={`
						position: absolute;
						top: 10%;
					`}>
					{APPS.map((apps_, index) => (
						<FlexDiv
							key={index}
							fullWidth
							direction="row"
							justifyContent="space-evenly"
							additionalStyle={`
							${css`
								margin-top: 48px;
							`}
						`}>
							{apps_.map((a, i) => renderAppIcon(a, i))}
						</FlexDiv>
					))}
				</View>
				<NavigationBar
					onPressHome={() => navigation.navigate('HomeScreen')}
					transparent
					black
				/>
			</View>
		</SafeAreaView>
	);
};

export default withTheme(AllApps);

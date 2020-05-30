import React from 'react';
import { withTheme, css } from 'styled-components';
import { View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppIcon from 'sharedUI/AppIcon';
import FlexDiv from 'sharedUI/FlexDiv';
import NavigationBar from 'sharedUI/NavigationBar';

import { ALL_APPS } from 'configs';
import { chunk } from 'utils';

const AllApps = ({ navigation, theme }) => {
	const deviceW = Dimensions.get('window').width;
	const iconSize = (deviceW - 12) / 5 - 12;

	const onPress = (screen) => navigation.navigate(screen);

	const renderAppIcon = ({ label, iconType, screen, notifs }, i) => (
		<AppIcon
			key={i}
			label={label}
			type={iconType || 'LOCK'}
			size={iconSize}
			notifs={notifs}
			{...screen && { onPress: () => onPress(screen) }}
		/>
	);

	const apps = chunk(ALL_APPS, 3);

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
					{apps.map((apps_, index) => (
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

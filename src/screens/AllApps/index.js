import React from 'react';
import { withTheme, css } from 'styled-components';
import { View } from 'react-native';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import AppIcon from 'sharedUI/AppIcon';
import FlexDiv from 'sharedUI/FlexDiv';
import NavigationBar from 'sharedUI/NavigationBar';

import { ALL_APPS, SCREENS } from 'configs';
import { chunk, getIconSize } from 'utils';

const AllAppsScreen = ({ navigation, theme }) => {
	const iconSize = getIconSize();

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
		<LayoutWrapper screenName={SCREENS.ALL_APPS}>
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
				<NavigationBar transparentButtons transparentBG />
			</View>
		</LayoutWrapper>
	);
};

export default withTheme(AllAppsScreen);

import React from 'react';
import { css } from 'styled-components';
import { View } from 'react-native';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import AppIcon from 'sharedUI/AppIcon';
import FlexDiv from 'sharedUI/FlexDiv';

import { ALL_APPS } from 'configs';
import { chunk, getIconSize } from 'utils';

const AllAppsScreen = ({ route, navigation }) => {
	const iconSize = getIconSize();

	const onPress = (screen) => navigation.navigate(screen);

	const apps = chunk(ALL_APPS, 3);

	return (
		<LayoutWrapper screenName={route.name}>
			<View
				css={`
					position: absolute;
					top: 6%;
				`}>
				{apps.map((apps_, index) => (
					<FlexDiv
						key={index}
						fullWidth
						direction="row"
						justifyContent="space-evenly"
						additionalStyle={css`
							margin-top: 48px;
						`}>
						{apps_.map((a, i) => (
							<AppIcon
								key={i}
								label={a.label}
								type={a.iconType || 'LOCK'}
								size={iconSize}
								notifs={a.notifs}
								{...a.screen && { onPress: () => onPress(a.screen) }}
							/>
						))}
					</FlexDiv>
				))}
			</View>
		</LayoutWrapper>
	);
};

export default AllAppsScreen;

import React from 'react';
import { withTheme } from 'styled-components';
import { useDispatch } from 'react-redux';
import Video from 'react-native-video';

import LayoutWrapper from 'sharedUI/LayoutWrapper';

import { SCREENS, STRINGS } from 'configs';

import { activateBigGlitch } from 'states/actions/gameActions';

const JanusScreen = ({ route, navigation, theme }) => {
	const dispatch = useDispatch();

	return (
		<LayoutWrapper screenName={route.name}>
			<Video
				source={STRINGS.JANUS_VOICE()}
				resizeMode="cover"
				posterResizeMode="cover"
				fullscreen
				css={theme.styles.janusVoice}
				onEnd={() => {
					activateBigGlitch(dispatch);
					navigation.navigate(SCREENS.END_MENU);
				}}
			/>
		</LayoutWrapper>
	);
};

export default withTheme(JanusScreen);

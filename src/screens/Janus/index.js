import React from 'react';
import { withTheme } from 'styled-components';
import Video from 'react-native-video';

import LayoutWrapper from 'sharedUI/LayoutWrapper';

import { SCREENS, STRINGS, NUMBERS } from 'configs';

const JanusScreen = ({ route, navigation, theme }) => (
	<LayoutWrapper screenName={route.name}>
		<Video
			source={STRINGS.JANUS_VOICE()}
			resizeMode="cover"
			posterResizeMode="cover"
			fullscreen
			css={theme.styles.janusVoice}
			onEnd={() =>
				setTimeout(
					() => navigation.navigate(SCREENS.END_MENU),
					NUMBERS.END_MENU_APPEARS_DELAY
				)
			}
		/>
	</LayoutWrapper>
);

export default withTheme(JanusScreen);

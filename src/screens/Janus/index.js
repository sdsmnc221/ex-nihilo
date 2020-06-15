import React from 'react';
import { withTheme } from 'styled-components';
import { useDispatch } from 'react-redux';
import { StackActions } from '@react-navigation/native';
import Video from 'react-native-video';

import LayoutWrapper from 'sharedUI/LayoutWrapper';

import { SCREENS, STRINGS } from 'configs';

import { activateBigGlitch } from 'states/actions/gameActions';

const JanusScreen = ({ route, navigation, theme }) => {
	const dispatch = useDispatch();

	const pushAction = StackActions.push(SCREENS.END_MENU);

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
					navigation.dispatch(pushAction);
				}}
			/>
		</LayoutWrapper>
	);
};

export default withTheme(JanusScreen);

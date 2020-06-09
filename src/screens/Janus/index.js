import React from 'react';
import { withTheme } from 'styled-components';
import Video from 'react-native-video';

import LayoutWrapper from 'sharedUI/LayoutWrapper';

const JanusScreen = ({ route, theme }) => (
	<LayoutWrapper screenName={route.name}>
		{/* <Video source={{uri: "background"}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} /> */}
	</LayoutWrapper>
);

export default withTheme(JanusScreen);

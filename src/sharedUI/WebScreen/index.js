import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const Wrapper = styled.View`
	width: 100%;
	min-height: 100%;
`;

const WebScreen = ({ url }) => {
	const webviewRef = useRef(null);

	return (
		<Wrapper>
			<WebView
				css={`
					${css`
						width: 100%;
						min-height: 100%;
					`}
				`}
				ref={webviewRef}
				source={{ uri: url }}
				onContentProcessDidTerminate={(syntheticEvent) => {
					const { nativeEvent } = syntheticEvent;
					console.warn('Content process terminated, reloading', nativeEvent);
					webviewRef.current && webviewRef.current.reload();
				}}
			/>
		</Wrapper>
	);
};

WebScreen.propTypes = {
	url: PropTypes.string.isRequired,
};

export default WebScreen;

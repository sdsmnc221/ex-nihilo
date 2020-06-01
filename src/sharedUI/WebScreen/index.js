import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { View, Linking } from 'react-native';
import { WebView } from 'react-native-webview';

const Wrapper = styled.View`
	width: 100%;
	min-height: 100%;
	background-color: ${({ bodyColor, theme }) =>
		bodyColor || theme.colors.ghostWhite};
`;

const WebScreen = ({ url, bodyColor, theme }) => {
	const webviewRef = useRef(null);

	const handleNavigationStateChange = (event) => {
		if (event.url !== url && webviewRef.current) {
			Linking.openURL(event.url);
			webviewRef.current.stopLoading();
			webviewRef.current.goBack();
		}
	};

	const handlerContentProcessDidTerminate = (syntheticEvent) => {
		const { nativeEvent } = syntheticEvent;
		console.warn('Content process terminated, reloading', nativeEvent);
		webviewRef.current && webviewRef.current.reload();
	};

	return (
		<Wrapper bodyColor={bodyColor}>
			<WebView
				css={`
					${css`
						width: 100%;
						min-height: 100%;
						background-color: ${bodyColor || theme.colors.ghostWhite};
					`}
				`}
				ref={webviewRef}
				source={{ uri: url }}
				onNavigationStateChange={handleNavigationStateChange}
				onContentProcessDidTerminate={handlerContentProcessDidTerminate}
			/>
		</Wrapper>
	);
};

WebScreen.propTypes = {
	url: PropTypes.string.isRequired,
	bodyColor: PropTypes.string,
};

WebScreen.defaultProps = {
	bodyColor: null,
};

export default withTheme(WebScreen);

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { useFocusEffect } from '@react-navigation/native';
import { View, Linking } from 'react-native';
import { WebView } from 'react-native-webview';

const Wrapper = styled.View`
	width: ${({ width }) => (width ? `${width}px` : '100%')};
	${({ height }) =>
		height
			? css`
					height: ${height}px;
			  `
			: css`
					min-height: 100%;
			  `}
	background-color: ${({ bodyColor, theme }) => bodyColor || 'transparent'};
`;

const WebScreen = ({
	width,
	height,
	url,
	bodyColor,
	injectJS,
	theme,
	...webViewProps
}) => {
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

	useFocusEffect(() => {
		if (injectJS && webviewRef.current) {
			injectJS(webviewRef.current);
		}
	}, [injectJS]);

	return (
		<Wrapper bodyColor={bodyColor} width={width} height={height}>
			<WebView
				css={`
					${css`
						width: 100%;
						min-height: 100%;
						background-color: ${bodyColor || 'transparent'};
						margin-bottom: 30%;
					`}
				`}
				ref={webviewRef}
				source={{ uri: url }}
				onNavigationStateChange={handleNavigationStateChange}
				onContentProcessDidTerminate={handlerContentProcessDidTerminate}
				{...webViewProps}
			/>
		</Wrapper>
	);
};

WebScreen.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	url: PropTypes.string.isRequired,
	bodyColor: PropTypes.string,
	injectJS: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

WebScreen.defaultProps = {
	width: null,
	height: null,
	bodyColor: null,
	injectJS: null,
};

export default withTheme(WebScreen);

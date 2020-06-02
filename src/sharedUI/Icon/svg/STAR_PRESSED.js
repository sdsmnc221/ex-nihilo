import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import { Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import STAR_PRESSED_IMG from 'assets/icons/STAR_PRESSED.png';

const STAR_PRESSED = ({ width, height, color, useImg }) =>
	useImg ? (
		<Image
			css={`
				${css`
					width: ${width}px;
					height: ${height}px;
				`}
			`}
			source={STAR_PRESSED_IMG}
			resizeMode="contain"
		/>
	) : (
		<Svg width={width} height={height} viewBox="0 0 23 21">
			<Path
				d="M11.0405 0L14.0183 7.50977L22.0808 8.02124L15.8586 13.1743L17.8635 21L11.0405 16.675L4.21704 21L6.22192 13.1743L0 8.02124L8.0625 7.50977L11.0405 0Z"
				stroke="none"
				fill={color}
				fillRule="evenodd"
			/>
		</Svg>
	);

STAR_PRESSED.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
	useImg: PropTypes.bool,
};

STAR_PRESSED.defaultProps = {
	width: 23,
	height: 21,
	color: '#CE976A',
	useImg: false,
};

export default STAR_PRESSED;

import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import { Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import STAR_PRESSED_RED_IMG from 'assets/icons/STAR_PRESSED_RED.png';

const STAR_PRESSED_RED = ({ width, height, color, useImg }) =>
	useImg ? (
		<Image
			css={`
				${css`
					width: ${width}px;
					height: ${height}px;
				`}
			`}
			source={STAR_PRESSED_RED_IMG}
			resizeMode="contain"
		/>
	) : (
		<Svg width={width} height={height} viewBox="0 0 21 19">
			<Path
				d="M10.5168 0.744141L13.1057 7.27271L20.1147 7.71729L14.7056 12.1971L16.4485 19.0004L10.5168 15.2405L4.58496 19.0004L6.32788 12.1971L0.918945 7.71729L7.92798 7.27271L10.5168 0.744141Z"
				stroke="none"
				fill={color}
				fillRule="evenodd"
			/>
		</Svg>
	);

STAR_PRESSED_RED.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
	useImg: PropTypes.bool,
};

STAR_PRESSED_RED.defaultProps = {
	width: 21,
	height: 19,
	color: '#CC4141',
	useImg: false,
};

export default STAR_PRESSED_RED;

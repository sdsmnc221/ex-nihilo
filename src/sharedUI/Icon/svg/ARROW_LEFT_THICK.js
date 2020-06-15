import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const ARROW_LEFT_THICK = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 21 16">
		<Path
			d="M1.10439 7.79901L7.81999 14.5146L8.32491 14.0098L2.21913 7.90399L20.3564 7.90399V7.18985L2.21913 7.18985L8.32491 1.08411L7.81999 0.579224L1.10439 7.29413C0.965134 7.43408 0.965134 7.65976 1.10439 7.79901Z"
			fill={color}
			stroke={color}
			stroke-width={0.7}
		/>
	</Svg>
);

ARROW_LEFT_THICK.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

ARROW_LEFT_THICK.defaultProps = {
	width: 21,
	height: 16,
	color: '#FFFFFF',
};

export default ARROW_LEFT_THICK;

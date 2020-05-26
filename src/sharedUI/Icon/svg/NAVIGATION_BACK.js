import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const NAVIGATION_BACK = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 16 18">
		<Path
			d="M15 16.2902L2.03973 9L15 1.70985L15 16.2902Z"
			stroke={color}
			strokeWidth={2}
		/>
	</Svg>
);

NAVIGATION_BACK.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};


NAVIGATION_BACK.defaultProps = {
	width: 16,
	height: 18,
	color: '#F5F4FF',
};

export default NAVIGATION_BACK;

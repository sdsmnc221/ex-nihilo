import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const WIFI_LIGHT = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 23 16">
		<Path
			d="M0 4.68613C6.24823 -1.56204 16.3784 -1.56204 22.6264 4.68613L11.3132 15.9994"
			stroke="none"
			fill={color}
			fillRule="evenodd"
			opacity={0.65}
		/>
		<Path
			d="M1.65494 6.34212C6.98882 1.00836 15.6366 1.00836 20.9702 6.34212L11.3128 15.9999"
			stroke="none"
			fill="white"
		/>
	</Svg>
);

WIFI_LIGHT.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

WIFI_LIGHT.defaultProps = {
	width: 23,
	height: 16,
	color: '#CE976A',
};

export default WIFI_LIGHT;

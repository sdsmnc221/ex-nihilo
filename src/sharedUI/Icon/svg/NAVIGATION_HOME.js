import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const NAVIGATION_HOME = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 18 18">
		<Path
			d="M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
			stroke={color}
			strokeWidth={2}
		/>
	</Svg>
);

NAVIGATION_HOME.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

NAVIGATION_HOME.defaultProps = {
	width: 18,
	height: 18,
	color: '#F5F4FF',
};

export default NAVIGATION_HOME;

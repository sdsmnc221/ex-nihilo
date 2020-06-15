import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const TEXT_CURSOR = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 1 10">
		<Path d="M0.5 0.5V9.5" stroke={color} />
	</Svg>
);

TEXT_CURSOR.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

TEXT_CURSOR.defaultProps = {
	width: 1,
	height: 10,
	color: '#707070',
};

export default TEXT_CURSOR;

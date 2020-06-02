import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const SEARCH = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 11 11">
		<Path
			d="M7.5 4C7.5 5.933 5.933 7.5 4 7.5C2.067 7.5 0.5 5.933 0.5 4C0.5 2.067 2.067 0.5 4 0.5C5.933 0.5 7.5 2.067 7.5 4Z"
			stroke={color}
		/>
		<Path d="M6.603 6.72412L9.75192 9.87318" stroke={color} />
	</Svg>
);

SEARCH.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

SEARCH.defaultProps = {
	width: 11,
	height: 11,
	color: '#4A4A4A',
};

export default SEARCH;

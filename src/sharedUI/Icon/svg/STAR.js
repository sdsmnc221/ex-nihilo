import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const STAR = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 16 15">
		<Path
			d="M16 5.71579L10.248 5.22632L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553L12.944 15L11.64 9.45L16 5.71579ZM8 10.5789L4.992 12.3711L5.792 8.99211L3.136 6.71842L6.64 6.41842L8 3.23684L9.368 6.42632L12.872 6.72632L10.216 9L11.016 12.3789L8 10.5789Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
		<Path
			d="M10 6L8 2.5L6.5 6H2L5.5 9L4 13.5L8 11.5L12 13.5L11 9L14 6H10Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

STAR.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

STAR.defaultProps = {
	width: 16,
	height: 15,
	color: '#818181',
};

export default STAR;

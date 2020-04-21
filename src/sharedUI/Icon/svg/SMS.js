import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const SMS = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 20 20">
		<Path
			d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM16 12H4V10H16V12ZM16 9H4V7H16V9ZM16 6H4V4H16V6Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

SMS.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

SMS.defaultProps = {
	width: 20,
	height: 20,
	color: '#000',
};

export default SMS;

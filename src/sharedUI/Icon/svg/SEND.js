import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const SEND = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 21 18">
		<Path
			d="M0.00999999 18L21 9L0.00999999 0L0 7L15 9L0 11L0.00999999 18Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

SEND.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

SEND.defaultProps = {
	width: 21,
	height: 18,
	color: '#565656',
};

export default SEND;

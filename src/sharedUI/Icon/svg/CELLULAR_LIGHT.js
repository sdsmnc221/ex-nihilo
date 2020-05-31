import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const CELLULAR_LIGHT = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 16 16">
		<Path
			d="M0.644012 15.9994H15.9607V0L0.644012 15.9994Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
			opacity={0.65}
		/>
		<Path
			d="M0.644012 15.9999H13.7168V2.34424L0.644012 15.9999Z"
			stroke="none"
			fill="white"
		/>
	</Svg>
);

CELLULAR_LIGHT.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

CELLULAR_LIGHT.defaultProps = {
	width: 16,
	height: 16,
	color: '#CE976A',
};

export default CELLULAR_LIGHT;

import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const FACEBOOK_XL = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 46 84">
		<Path
			d="M46 0H33.4545C27.9091 0 22.5908 2.21249 18.6696 6.15076C14.7484 10.089 12.5455 15.4305 12.5455 21V33.6H0V50.4H12.5455V84H29.2727V50.4H41.8182L46 33.6H29.2727V21C29.2727 19.8861 29.7133 18.8178 30.4976 18.0302C31.2818 17.2425 32.3455 16.8 33.4545 16.8H46V0Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

FACEBOOK_XL.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

FACEBOOK_XL.defaultProps = {
	width: 46,
	height: 84,
	color: '#c4c4c4',
};

export default FACEBOOK_XL;

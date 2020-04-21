import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const DOTS_VERTICAL = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 5 20">
		<Path
			d="M0 5H5V0H0V5ZM0 20H5V15H0V20ZM0 12.5H5V7.5H0V12.5Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

DOTS_VERTICAL.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

DOTS_VERTICAL.defaultProps = {
	width: 5,
	height: 20,
	color: '#565656',
};

export default DOTS_VERTICAL;

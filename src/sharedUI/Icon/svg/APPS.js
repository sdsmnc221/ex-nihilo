import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const APPS = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 20 20">
		<Path
			d="M0 5H5V0H0V5ZM7.5 20H12.5V15H7.5V20ZM0 20H5V15H0V20ZM0 12.5H5V7.5H0V12.5ZM7.5 12.5H12.5V7.5H7.5V12.5ZM15 0V5H20V0H15ZM7.5 5H12.5V0H7.5V5ZM15 12.5H20V7.5H15V12.5ZM15 20H20V15H15V20Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

APPS.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

APPS.defaultProps = {
	width: 20,
	height: 20,
	color: '#000',
};

export default APPS;

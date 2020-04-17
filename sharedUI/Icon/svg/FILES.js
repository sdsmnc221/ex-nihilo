import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const FILES = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 25 20">
		<Path
			d="M22.5 2.5H12.5L10 0H2.5C1.125 0 0.0125 1.125 0.0125 2.5L0 17.5C0 18.875 1.125 20 2.5 20H22.5C23.875 20 25 18.875 25 17.5V5C25 3.625 23.875 2.5 22.5 2.5ZM22.5 17.5H2.5V5H22.5V17.5Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

FILES.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

FILES.defaultProps = {
	width: 25,
	height: 20,
	color: '#000',
};

export default FILES;

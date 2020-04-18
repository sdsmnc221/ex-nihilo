import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const EMAIL_REPLY = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 15 17">
		<Path
			d="M9.61651e-07 6L6 -7.86805e-07L7.42 1.42L3.83 5L15 5L15 17L13 17L13 7L3.83 7L7.42 10.58L6 12L9.61651e-07 6Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

EMAIL_REPLY.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

EMAIL_REPLY.defaultProps = {
	width: 15,
	height: 17,
	color: '#565656',
};

export default EMAIL_REPLY;

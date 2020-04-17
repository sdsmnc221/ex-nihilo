import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const ADD = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 25 25">
		<Path
			d="M13.7656 11.6562H24.1484V14.2812H13.7656V25.5781H10.9297V14.2812H0.757812V11.6562H10.9297V0.734375H13.7656V11.6562Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

ADD.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

ADD.defaultProps = {
	width: 25,
	height: 26,
	color: '#E5E5E5',
};

export default ADD;

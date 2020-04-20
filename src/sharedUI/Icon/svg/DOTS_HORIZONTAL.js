import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const DOTS_HORIZONTAL = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 20 5">
		<Path
			d="M15 -2.18557e-07L15 5L20 5L20 0L15 -2.18557e-07ZM0 -8.74228e-07L-2.18557e-07 5L5 5L5 -6.55671e-07L0 -8.74228e-07ZM7.5 -5.46392e-07L7.5 5L12.5 5L12.5 -3.27835e-07L7.5 -5.46392e-07Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

DOTS_HORIZONTAL.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

DOTS_HORIZONTAL.defaultProps = {
	width: 20,
	height: 5,
	color: '#565656',
};

export default DOTS_HORIZONTAL;

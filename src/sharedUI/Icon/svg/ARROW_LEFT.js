import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const ARROW_LEFT = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 20 14">
		<Path
			d="M0.104385 7.21991L6.81999 13.9355L7.32491 13.4307L1.21913 7.32489L19.3564 7.32489V6.61075L1.21913 6.61075L7.32491 0.505005L6.81999 0.00012207L0.104385 6.71503C-0.0348663 6.85498 -0.0348663 7.08066 0.104385 7.21991Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

ARROW_LEFT.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

ARROW_LEFT.defaultProps = {
	width: 20,
	height: 14,
	color: '#FFFFFF',
};

export default ARROW_LEFT;

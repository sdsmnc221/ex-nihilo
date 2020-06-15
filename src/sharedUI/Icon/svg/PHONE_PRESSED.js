import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const PHONE_PRESSED = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 23 31">
		<Path
			d="M18.0453 19.7223C17.8895 19.4603 17.6843 19.3045 17.4298 19.2551C17.1753 19.2056 16.9222 19.2617 16.6697 19.3707L13.9005 21.15C13.7496 21.2576 13.5966 21.2068 13.4937 21.1025C12.7232 20.4261 11.3337 19.0185 10.1918 17.1322C8.94561 15.0361 8.09928 12.4594 7.83433 11.6179L10.4019 9.94685C11.0062 9.5692 11.1974 8.66885 10.8337 8.03988L6.99219 1.64725C6.68064 1.12322 6.06867 0.920026 5.56448 1.19073C4.35304 1.73481 2.23755 3.03019 1.31193 5.99991C0.191581 9.60596 1.42386 14.5014 5.00599 20.4749C8.69174 26.6055 12.39 29.8313 16.0473 29.9415C16.1488 29.9402 16.2503 29.9389 16.3519 29.9375C19.8547 29.8914 21.8979 26.9598 21.9981 26.8528L22.1476 26.6396L18.0453 19.7223Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
			clipRule="evenodd"
		/>
	</Svg>
);

PHONE_PRESSED.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

PHONE_PRESSED.defaultProps = {
	width: 23,
	height: 31,
	color: '#CE976A',
};

export default PHONE_PRESSED;

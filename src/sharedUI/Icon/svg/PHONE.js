import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const PHONE = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 20 20">
		<Path
			d="M18.9 13.7556C17.5333 13.7556 16.2111 13.5333 14.9778 13.1333C14.5889 13 14.1556 13.1 13.8556 13.4L12.1111 15.5889C8.96667 14.0889 6.02222 11.2556 4.45556 8L6.62222 6.15556C6.92222 5.84444 7.01111 5.41111 6.88889 5.02222C6.47778 3.78889 6.26667 2.46667 6.26667 1.1C6.26667 0.5 5.76667 0 5.16667 0H1.32222C0.722222 0 0 0.266667 0 1.1C0 11.4222 8.58889 20 18.9 20C19.6889 20 20 19.3 20 18.6889V14.8556C20 14.2556 19.5 13.7556 18.9 13.7556Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

PHONE.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

PHONE.defaultProps = {
	width: 20,
	height: 20,
	color: '#000',
};

export default PHONE;

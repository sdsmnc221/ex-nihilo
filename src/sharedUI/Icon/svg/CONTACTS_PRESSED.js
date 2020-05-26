import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const CONTACTS_PRESSED = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 20 27">
		<Path
			d="M11.9271 14.0893C14.8437 13.2321 16.9271 10.4464 16.9271 7.17857C16.9271 3.21429 13.8021 0 9.94792 0C6.09375 0 2.96875 3.21429 2.96875 7.17857C2.96875 10.4464 5.05208 13.1786 7.96875 14.0893H7.70833C3.4375 14.0893 0 17.625 0 22.0179V27H20V22.5C19.9479 17.8929 16.3542 14.1964 11.9271 14.0893Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
			clipRule="evenodd"
		/>
	</Svg>
);

CONTACTS_PRESSED.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

CONTACTS_PRESSED.defaultProps = {
	width: 20,
	height: 27,
	color: '#CE976A',
};

export default CONTACTS_PRESSED;

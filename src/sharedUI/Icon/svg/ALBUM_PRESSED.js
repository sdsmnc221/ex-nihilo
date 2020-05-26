import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const ALBUM_PRESSED = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 23 25">
		<Path
			d="M21.9634 0H0.582363C0.249584 0 0 0.249584 0 0.582363V24.4176C0 24.7504 0.249584 25 0.582363 25H21.9634C22.2962 25 22.5458 24.7504 22.5458 24.4176V0.582363C22.5458 0.249584 22.2962 0 21.9634 0ZM19.9667 12.2296L17.2629 9.73378L12.8952 13.8103L6.69717 7.8203L2.57903 11.9384V2.66223H19.9667V12.2296Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
			clipRule="evenodd"
		/>
		<Path
			d="M13.0615 9.90005C13.9767 9.90005 14.7254 9.1513 14.7254 8.23616C14.7254 7.32102 13.9767 6.57227 13.0615 6.57227C12.1464 6.57227 11.3976 7.32102 11.3976 8.23616C11.3976 9.1513 12.1464 9.90005 13.0615 9.90005ZM13.0615 7.19623C13.6439 7.19623 14.1015 7.6538 14.1015 8.23616C14.1015 8.81852 13.6439 9.27609 13.0615 9.27609C12.4792 9.27609 12.0216 8.81852 12.0216 8.23616C12.0216 7.6538 12.4792 7.19623 13.0615 7.19623Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
			clipRule="evenodd"
		/>
	</Svg>
);

ALBUM_PRESSED.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

ALBUM_PRESSED.defaultProps = {
	width: 23,
	height: 25,
	color: '#CE976A',
};

export default ALBUM_PRESSED;

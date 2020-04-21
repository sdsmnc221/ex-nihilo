import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const PHOTO_XL = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 128 128">
		<Path
			d="M128 113.778V14.2222C128 6.4 121.6 0 113.778 0H14.2222C6.4 0 0 6.4 0 14.2222V113.778C0 121.6 6.4 128 14.2222 128H113.778C121.6 128 128 121.6 128 113.778ZM39.1111 74.6667L56.8889 96.0711L81.7778 64L113.778 106.667H14.2222L39.1111 74.6667Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

PHOTO_XL.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

PHOTO_XL.defaultProps = {
	width: 128,
	height: 128,
	color: '#454545',
};

export default PHOTO_XL;

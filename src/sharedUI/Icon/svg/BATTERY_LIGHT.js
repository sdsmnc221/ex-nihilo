import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G, Rect } from 'react-native-svg';

const BATTERY_LIGHT = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 9 16">
		<Path
			d="M7.55523 1.50121H6.04386V0H3.25901V1.50121H1.74765C1.00551 1.50121 0.4039 2.10293 0.4039 2.84513V14.6555C0.4039 15.3977 1.00551 15.9995 1.74765 15.9995H7.55523C8.29737 15.9995 8.89898 15.3977 8.89898 14.6555V2.84513C8.89898 2.10293 8.29737 1.50121 7.55523 1.50121Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
			opacity={0.65}
		/>
		<G>
			<Rect
				x={0.106323}
				y={4.38721}
				width={9.01978}
				height={11.6125}
				fill="white"
			/>
		</G>
	</Svg>
);

BATTERY_LIGHT.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

BATTERY_LIGHT.defaultProps = {
	width: 9,
	height: 16,
	color: '#CE976A',
};

export default BATTERY_LIGHT;

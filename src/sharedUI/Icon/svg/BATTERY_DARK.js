import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G, Rect } from 'react-native-svg';

const BATTERY_DARK = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 9 16">
		<Path
			d="M7.55514 1.50121H6.04377V0H3.25892V1.50121H1.74755C1.00542 1.50121 0.403809 2.10293 0.403809 2.84513V14.6555C0.403809 15.3977 1.00542 15.9995 1.74755 15.9995H7.55514C8.29728 15.9995 8.89889 15.3977 8.89889 14.6555V2.84513C8.89889 2.10293 8.29728 1.50121 7.55514 1.50121Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
			opacity={0.65}
		/>
		<G>
			<Rect
				x={0.106445}
				y={4.38721}
				width={9.01978}
				height={11.6125}
				fill="white"
			/>
		</G>
	</Svg>
);

BATTERY_DARK.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

BATTERY_DARK.defaultProps = {
	width: 9,
	height: 16,
	color: '#6B5CFF',
};

export default BATTERY_DARK;

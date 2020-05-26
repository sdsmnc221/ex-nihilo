import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const APPS_PRESSED = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 13 13">
		<Path
			d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
		<Path
			d="M1.5 8C2.32843 8 3 7.32843 3 6.5C3 5.67157 2.32843 5 1.5 5C0.671573 5 0 5.67157 0 6.5C0 7.32843 0.671573 8 1.5 8Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
		<Path
			d="M1.5 13C2.32843 13 3 12.3284 3 11.5C3 10.6716 2.32843 10 1.5 10C0.671573 10 0 10.6716 0 11.5C0 12.3284 0.671573 13 1.5 13Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
		<Path
			d="M6.5 3C7.32843 3 8 2.32843 8 1.5C8 0.671573 7.32843 0 6.5 0C5.67157 0 5 0.671573 5 1.5C5 2.32843 5.67157 3 6.5 3Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
		<Path
			d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
		<Path
			d="M6.5 13C7.32843 13 8 12.3284 8 11.5C8 10.6716 7.32843 10 6.5 10C5.67157 10 5 10.6716 5 11.5C5 12.3284 5.67157 13 6.5 13Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
		<Path
			d="M11.5 3C12.3284 3 13 2.32843 13 1.5C13 0.671573 12.3284 0 11.5 0C10.6716 0 10 0.671573 10 1.5C10 2.32843 10.6716 3 11.5 3Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
		<Path
			d="M11.5 8C12.3284 8 13 7.32843 13 6.5C13 5.67157 12.3284 5 11.5 5C10.6716 5 10 5.67157 10 6.5C10 7.32843 10.6716 8 11.5 8Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
		<Path
			d="M11.5 13C12.3284 13 13 12.3284 13 11.5C13 10.6716 12.3284 10 11.5 10C10.6716 10 10 10.6716 10 11.5C10 12.3284 10.6716 13 11.5 13Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

APPS_PRESSED.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

APPS_PRESSED.defaultProps = {
	width: 13,
	height: 13,
	color: '#CE976A',
};

export default APPS_PRESSED;

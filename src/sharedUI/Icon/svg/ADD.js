import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const ADD = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 21 29">
		<Path
			d="M10.5 27C16.299 27 21 22.299 21 16.5C21 10.701 16.299 6 10.5 6C4.70101 6 0 10.701 0 16.5C0 22.299 4.70101 27 10.5 27Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
		<Path
			d="M9.37 20.601H11.232V17.162H14.652V15.3H11.232V11.899H9.37V15.3H5.988V17.162H9.37V20.601Z"
			stroke="none"
			fill="white"
			fillRule="evenodd"
		/>
	</Svg>
);

ADD.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

ADD.defaultProps = {
	width: 21,
	height: 29,
	color: '#CE976A',
};

export default ADD;

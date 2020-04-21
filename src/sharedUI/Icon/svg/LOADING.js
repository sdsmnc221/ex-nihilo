import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const LOADING = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 32 31">
		<Path
			d="M23.9361 13.5371H31.0013V17.4615H23.9361V13.5371ZM17.4602 31H13.5371V23.9361H17.4602V31ZM7.06522 13.5371V17.4615H9.53674e-06V13.5371H7.06522ZM17.4602 7.06391H13.5371V0H17.4602V7.06391ZM27.8472 25.0735L25.0722 27.8499L20.0782 22.8546L22.8532 20.0796L27.8472 25.0735ZM27.8472 5.92651L22.8532 10.9205L20.0782 8.1468L25.0722 3.15147L27.8472 5.92651ZM10.9204 22.8519L5.92781 27.8459L3.15013 25.0736L8.1494 20.077L10.9204 22.8519Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

LOADING.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

LOADING.defaultProps = {
	width: 32,
	height: 31,
	color: '#010002',
};

export default LOADING;

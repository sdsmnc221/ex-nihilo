import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const LOCK = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 19 27">
		<Path
			d="M3.78117 9.83021V6.97949C3.78117 3.71162 6.42331 1 9.76071 1C13.0286 1 15.7402 3.64209 15.7402 6.97949V9.83021"
			stroke={color}
			strokeMiterlimit={10}
			strokeLinejoin="round"
			fill="none"
			fillRule="evenodd"
		/>
		<Path
			d="M9.69114 14.2803C8.85679 14.2803 8.23105 14.9061 8.23105 15.7404C8.23105 16.2271 8.50914 16.6443 8.85679 16.9224V19.9817C8.85679 20.4684 9.27397 20.816 9.69114 20.816C10.1778 20.816 10.5255 20.3988 10.5255 19.9817V16.9224C10.5255 16.9224 10.5255 16.9224 10.595 16.9224C10.9427 16.6443 11.1513 16.2271 11.1513 15.7404C11.1513 14.9756 10.5255 14.2803 9.69114 14.2803Z"
			stroke={color}
			strokeMiterlimit={10}
			strokeLinejoin="round"
			fill="none"
			fillRule="evenodd"
		/>
		<Path
			d="M9.69114 14.2803C8.85679 14.2803 8.23105 14.9061 8.23105 15.7404C8.23105 16.2271 8.50914 16.6443 8.85679 16.9224V19.9817C8.85679 20.4684 9.27397 20.816 9.69114 20.816C10.1778 20.816 10.5255 20.3988 10.5255 19.9817V16.9224C10.5255 16.9224 10.5255 16.9224 10.595 16.9224C10.9427 16.6443 11.1513 16.2271 11.1513 15.7404C11.1513 14.9756 10.5255 14.2803 9.69114 14.2803Z"
			stroke={color}
			strokeMiterlimit={10}
			strokeLinejoin="round"
			fill="none"
			fillRule="evenodd"
		/>
		<Path
			d="M16.4355 26.1001H2.94681C1.90387 26.1001 1 25.2658 1 24.1533V11.7076C1 10.6646 1.83434 9.76074 2.94681 9.76074H16.4355C17.4784 9.76074 18.3823 10.5951 18.3823 11.7076V24.1533C18.3823 25.1962 17.548 26.1001 16.4355 26.1001Z"
			stroke={color}
			strokeMiterlimit={10}
			strokeLinejoin="round"
			fill="none"
			fillRule="evenodd"
		/>
	</Svg>
);

LOCK.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

LOCK.defaultProps = {
	width: 19,
	height: 27,
	color: '#4A4A4A',
};

export default LOCK;

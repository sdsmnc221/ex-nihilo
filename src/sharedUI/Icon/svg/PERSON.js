import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const PERSON = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 21 27">
		<Path
			d="M12.055 13.9568C14.9759 13.0968 17.1159 10.3954 17.1159 7.19997C17.1159 3.31441 13.9548 0.152832 10.0692 0.152832C6.18368 0.152832 3.02259 3.31441 3.02259 7.19997C3.02259 10.3856 5.1493 13.0811 8.05597 13.95H7.78093C3.49066 13.95 0 17.4401 0 21.7304V26.1896C0 26.3998 0.170433 26.5698 0.38065 26.5698H19.7578C19.968 26.5698 20.138 26.3998 20.138 26.1896V22.1734C20.138 17.6862 16.524 14.033 12.055 13.9568ZM3.7829 7.19997C3.7829 3.73337 6.60313 0.913635 10.0692 0.913635C13.5358 0.913635 16.3556 3.73337 16.3556 7.19997C16.3556 10.6661 13.5358 13.4858 10.0692 13.4858C6.60313 13.4858 3.7829 10.6661 3.7829 7.19997ZM19.3777 25.809H0.760805V21.7304C0.760805 17.8596 3.91011 14.7103 7.78093 14.7103H11.9145C16.0294 14.7103 19.3777 18.058 19.3777 22.1734V25.809Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
			clipRule="evenodd"
		/>
	</Svg>
);

PERSON.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

PERSON.defaultProps = {
	width: 21,
	height: 27,
	color: '#CE976A',
};

export default PERSON;

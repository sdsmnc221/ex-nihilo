import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const FACEBOOK = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 9 19">
		<Path
			d="M8.66406 2.375H8.54688C8.35156 2.30469 8.07031 2.23828 7.70312 2.17578C7.33594 2.10547 7.00781 2.07031 6.71875 2.07031C5.78906 2.07031 5.125 2.28125 4.72656 2.70312C4.33594 3.11719 4.14062 3.87109 4.14062 4.96484V5.41016H7.78516V7.23828H4.21094V18.5H2.00781V7.23828H0.519531V5.41016H2.00781V4.97656C2.00781 3.39844 2.38672 2.19922 3.14453 1.37891C3.90234 0.558594 4.98828 0.148438 6.40234 0.148438C6.80859 0.148438 7.20703 0.171875 7.59766 0.21875C7.98828 0.257812 8.34375 0.304687 8.66406 0.359375V2.375Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

FACEBOOK.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

FACEBOOK.defaultProps = {
	width: 9,
	height: 19,
	color: '#494949',
};

export default FACEBOOK;

import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const EMAIL = ({ color }) => (
	<Svg width={24} height={16} viewBox="0 0 105 84">
		<Path
			d="M94.5 0H10.5C4.725 0 0.0524999 4.725 0.0524999 10.5L0 73.5C0 79.275 4.725 84 10.5 84H94.5C100.275 84 105 79.275 105 73.5V10.5C105 4.725 100.275 0 94.5 0ZM94.5 21L52.5 47.25L10.5 21V10.5L52.5 36.75L94.5 10.5V21Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

EMAIL.propTypes = {
	color: PropTypes.string,
};

EMAIL.defaultProps = {
	color: '#000',
};

export default EMAIL;

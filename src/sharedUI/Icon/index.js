import React from 'react';
import PropTypes from 'prop-types';

import * as icons from './svg';

function Icon(props) {
	const IconType = icons[props.type];

	if (!IconType) {
		console.warn('The icon ', props.type, ' is not available.');
	}

	return IconType ? <IconType {...props} /> : null;
}

Icon.propTypes = {
	type: PropTypes.string.isRequired,
};

export default Icon;

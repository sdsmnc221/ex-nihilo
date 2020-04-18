import React, { useState } from 'react';
import PropTypes from 'prop-types';

import IconButton from './IconButton';

const StarButton = ({ initialActive, additionalStyles }) => {
	const [active, setActive] = useState(initialActive);
	const onPress = () => setActive(!active);

	return (
		<IconButton
			type={`STAR${active ? '' : '_OUTLINE'}`}
			size={20}
			onPress={onPress}
			noBlink
			additionalStyles={additionalStyles}
		/>
	);
};

StarButton.propTypes = {
	initialActive: PropTypes.bool,
	additionalStyles: PropTypes.object,
};

StarButton.defaultProps = {
	initialActive: false,
	additionalStyles: {},
};

export default StarButton;

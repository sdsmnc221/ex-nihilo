import React, { useState } from 'react';
import PropTypes from 'prop-types';

import IconButton from './IconButton';

const StarButton = ({
	size,
	initialActive,
	additionalStyles,
	noPress,
	...otherProps
}) => {
	const [active, setActive] = useState(initialActive);
	const onPress = () => (noPress ? null : setActive(!active));

	return (
		<IconButton
			type={`STAR${active ? '_PRESSED' : ''}`}
			size={size}
			onPress={onPress}
			noBlink
			additionalStyles={additionalStyles}
			{...otherProps}
		/>
	);
};

StarButton.propTypes = {
	size: PropTypes.number,
	initialActive: PropTypes.bool,
	additionalStyles: PropTypes.object,
	noPress: PropTypes.bool,
};

StarButton.defaultProps = {
	size: 20,
	initialActive: false,
	additionalStyles: {},
	noPress: false,
};

export default StarButton;

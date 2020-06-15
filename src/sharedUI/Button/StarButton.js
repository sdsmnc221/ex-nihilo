import React, { useState } from 'react';
import PropTypes from 'prop-types';

import IconButton from './IconButton';

const StarButton = ({
	size,
	initialActive,
	noPress,
	redPress,
	...otherProps
}) => {
	const [active, setActive] = useState(initialActive);
	const onPress = () => (noPress ? null : setActive(!active));
	const pressType = `_PRESSED${redPress ? '_RED' : ''}`;

	return (
		<IconButton
			type={`STAR${active ? pressType : ''}`}
			size={size}
			onPress={onPress}
			noBlink
			{...otherProps}
		/>
	);
};

StarButton.propTypes = {
	size: PropTypes.number,
	initialActive: PropTypes.bool,
	noPress: PropTypes.bool,
	redPress: PropTypes.bool,
};

StarButton.defaultProps = {
	size: 20,
	initialActive: false,
	noPress: false,
	redPress: false,
};

export default StarButton;

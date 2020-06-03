import React, { useState } from 'react';
import PropTypes from 'prop-types';

import IconButton from './IconButton';

const HeartButton = ({ size, initialActive, noPress, ...otherProps }) => {
	const [active, setActive] = useState(initialActive);
	const onPress = () => (noPress ? null : setActive(!active));

	return (
		<IconButton
			type={`HEART${active ? '_PRESSED' : ''}`}
			size={size}
			onPress={onPress}
			noBlink
			{...otherProps}
		/>
	);
};

HeartButton.propTypes = {
	size: PropTypes.number,
	initialActive: PropTypes.bool,
	noPress: PropTypes.bool,
};

HeartButton.defaultProps = {
	size: 20,
	initialActive: false,
	noPress: false,
};

export default HeartButton;

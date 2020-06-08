import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';

import { TouchableOpacity } from 'react-native-gesture-handler';

import StyledIcon from 'sharedUI/Icon/StyledIcon';

const Button = styled.TouchableOpacity`
	${({ size }) =>
		css`
			width: ${size}px;
			height: ${size}px;
			border-radius: ${size}px;
		`}
	border: 1px solid ${({ theme }) => theme.colors.white};
	background-color: ${({ active, theme }) =>
		active ? theme.colors.white : theme.colors.black};
    margin: 12px 0;
    align-self: center;
	${({ theme }) => theme.styles.flexWithoutSize()}
`;

const ArrowButton = ({
	pressHandler,
	iconType,
	additionalStyle,
	size,
	theme,
}) => {
	const [buttonPressed, setButtonPressed] = useState(false);

	const onPress = () => setButtonPressed(!buttonPressed);

	useEffect(() => {
		if (buttonPressed) {
			pressHandler();
			setButtonPressed(false);
		}
	}, [buttonPressed]);

	return (
		<Button
			onPress={onPress}
			active={buttonPressed}
			activeOpacity={0.8}
			size={size}
			css={additionalStyle}>
			<StyledIcon
				type={iconType}
				color={buttonPressed ? theme.colors.black : theme.colors.white}
			/>
		</Button>
	);
};

ArrowButton.propTypes = {
	pressHandler: PropTypes.func,
	iconType: PropTypes.string.isRequired,
	additionalStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
	size: PropTypes.number,
};

ArrowButton.defaultProps = {
	pressHandler: () => {},
	additionalStyle: null,
	size: 30,
};

export default withTheme(ArrowButton);

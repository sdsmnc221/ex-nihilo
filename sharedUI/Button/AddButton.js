import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from '../Icon';

const Wrapper = styled.TouchableOpacity`
	position: absolute;
	left: ${({ position }) => position.left};
	right: ${({ position }) => position.right};
	top: ${({ position }) => position.top};
	bottom: ${({ position }) => position.bottom};
	background-color: #565656;
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
	border-radius: ${({ size }) => size}px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const defaultPosition = {
	left: 'auto',
	top: 'auto',
	right: '12px',
	bottom: '64px',
};

const AddButton = ({ position, size, iconW, iconH, onPress }) => {
	position = position || defaultPosition;
	return (
		<Wrapper position={position} size={size} onPress={onPress}>
			{iconW && iconH ? (
				<Icon type="ADD" width={iconW} height={iconH} />
			) : (
				<Icon type="ADD" />
			)}
		</Wrapper>
	);
};

AddButton.propTypes = {
	position: PropTypes.object,
	size: PropTypes.number,
	iconW: PropTypes.number,
	iconH: PropTypes.number,
	onPress: PropTypes.func,
};

AddButton.defaultProps = {
	position: undefined,
	size: 56,
	iconW: undefined,
	iconH: undefined,
	onPress: () => {},
};

export default AddButton;

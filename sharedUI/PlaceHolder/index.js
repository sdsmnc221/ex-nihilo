import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styled, { css } from 'styled-components';

const Wrapper = styled.View`
  background-color: ${({ color }) => color};
  width: ${({ size, width }) => width || size}px;
  height: ${({ size, height }) => height || size}px;
  border-radius: ${({ round, size }) => (round ? size : 0)}px;
  justify-content: center;
  align-items: center;

  /* ${({ size }) => css`
			width: ${size}px;
			height: ${size}px;
		`} */
`;

const PlaceHolder = ({ color, size, width, height, round, text }) => (
	<Wrapper color={color} size={size} width={width} height={height} round={round}>
		{text && <Text>{text}</Text>}
	</Wrapper>
);

PlaceHolder.propTypes = {
	color: PropTypes.string,
	size: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
	round: PropTypes.bool,
	text: PropTypes.string,
};

PlaceHolder.defaultProps = {
	color: '#565656',
	size: 50,
	width: undefined,
	height: undefined,
	round: false,
	text: undefined,
};

export default PlaceHolder;

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/native';
import 'jest-styled-components/native';
import { View, Text } from 'react-native';

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

const Label = styled.Text`
	font-size: ${({ textSize }) => textSize}px;
	text-align: center;
`;

const PlaceHolder = ({ color, size, textSize, width, height, round, text }) => (
	<Wrapper color={color} size={size} width={width} height={height} round={round}>
		{text && <Label textSize={textSize}>{text}</Label>}
	</Wrapper>
);

PlaceHolder.propTypes = {
	color: PropTypes.string,
	size: PropTypes.number,
	textSize: PropTypes.number,
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
	textSize: 12,
};

export default PlaceHolder;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Button = styled.TouchableOpacity`
	width: ${({ width }) =>
		width ? (typeof width === 'string' ? width : `${width}px`) : 'auto'};
	height: ${({ height }) =>
		height ? (typeof height === 'string' ? height : `${height}px`) : 'auto'};
	background-color: ${({ backgroundColor, theme }) =>
		backgroundColor ? backgroundColor : theme.colors.black};
	${({ theme }) => theme.styles.flexWithoutSize()}
`;

const ButtonText = styled.Text`
	color: ${({ textColor, theme }) =>
		textColor ? textColor : theme.colors.white};
`;

const RectButton = ({
	width,
	height,
	text,
	pressHandler,
	additionalStyle,
	additionalTextStyle,
	backgroundColor,
	textColor,
}) => {
	return (
		<Button
			width={width}
			height={height}
			backgroundColor={backgroundColor}
			onPress={pressHandler}
			activeOpacity={0.8}
			css={`
				${additionalStyle}
			`}>
			<ButtonText
				textColor={textColor}
				css={`
					${additionalTextStyle}
				`}>
				{text}
			</ButtonText>
		</Button>
	);
};

RectButton.propTypes = {
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	text: PropTypes.string.isRequired,
	pressHandler: PropTypes.func,
	additionalStyle: PropTypes.string,
	additionalTextStyle: PropTypes.string,
	backgroundColor: PropTypes.string,
	textColor: PropTypes.string,
};

RectButton.defaultProps = {
	width: null,
	height: null,
	pressHandler: () => {},
	additionalStyle: null,
	additionalTextStyle: null,
	backgroundColor: null,
	textColor: null,
};

export default RectButton;

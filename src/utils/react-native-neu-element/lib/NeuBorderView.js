import React from 'react';
import NeuView from './NeuView';
import PropTypes from 'prop-types';

const NeuBorderView = (props) => {
	const {
		color,
		width = 100,
		height = 100,
		borderRadius,
		borderWidth = 10,
		noShadow = false,
		children,
		containerStyle,
		customLightShadow,
		customDarkShadow,
		customInsetLightShadow,
		customInsetDarkShadow,
		style,
	} = props;
	return (
		<NeuView
			color={color}
			width={width}
			height={height}
			borderRadius={borderRadius}
			style={style}
			customDarkShadow={customDarkShadow}
			customLightShadow={customLightShadow}
			noShadow={noShadow}>
			<NeuView
				inset
				color={color}
				width={width - borderWidth}
				height={height - borderWidth}
				borderRadius={borderRadius}
				containerStyle={containerStyle}
				customInsetDarkShadow={{
					offsetX: -1,
					offsetY: -1,
					...customInsetDarkShadow,
				}}
				customInsetLightShadow={{
					offsetX: 1,
					offsetY: 1,
					...customInsetLightShadow,
				}}>
				{children}
			</NeuView>
		</NeuView>
	);
};

NeuBorderView.propTypes = {
	color: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	borderRadius: PropTypes.number.isRequired,
	borderWidth: PropTypes.number.isRequired,
	containerStyle: PropTypes.object,
	style: PropTypes.object,
};

NeuBorderView.defaultProps = {
	containerStyle: null,
	style: null,
};
export default NeuBorderView;

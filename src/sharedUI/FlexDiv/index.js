import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { View } from 'react-native';

const FlexDiv = ({
	theme,
	children,
	justifyContent,
	alignItems,
	direction,
	fullWidth,
	fullHeight,
	additionalStyle,
}) => (
	<View
		css={`
			${theme.styles.flex(justifyContent, alignItems, direction, fullWidth)}
			${additionalStyle}
			${fullHeight ? 'height: 100%;' : ''}
		`}>
		{children}
	</View>
);

FlexDiv.propTypes = {
	justifyContent: PropTypes.string,
	alignItems: PropTypes.string,
	direction: PropTypes.string,
	fullWidth: PropTypes.bool,
	fullHeight: PropTypes.bool,
	additionalStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};

FlexDiv.defaultProps = {
	justifyContent: 'center',
	alignItems: 'center',
	direction: 'column',
	fullWidth: false,
	fullHeight: false,
	additionalStyle: null,
};

export default withTheme(FlexDiv);

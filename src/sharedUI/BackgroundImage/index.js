import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { device } from 'utils';

const { width, realHeight } = device();

const StyledImage = styled.Image`
	position: absolute;
	width: ${width}px;
	height: ${realHeight}px;
	${({ theme }) => theme.styles.fullScreen}
`;

const Solid = styled.View`
	position: absolute;
	width: ${width}px;
	height: ${realHeight}px;
	background-color: ${({ solidColor }) => solidColor};
	opacity: ${({ solidOpacity }) => solidOpacity};
`;

const BackgroundImage = ({
	source,
	resizeMode,
	solid,
	solidColor,
	solidOpacity,
}) => (
	<>
		<StyledImage source={source} resizeMode={resizeMode} />
		{solid && <Solid solidColor={solidColor} solidOpacity={solidOpacity} />}
	</>
);

BackgroundImage.propTypes = {
	source: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	resizeMode: PropTypes.string,
	solid: PropTypes.bool,
	solidColor: PropTypes.string,
	solidOpacity: PropTypes.number,
};

BackgroundImage.defaultProps = {
	resizeMode: 'cover',
	solid: false,
	solidColor: 'transparent',
	solidOpacity: 0,
};

export default BackgroundImage;

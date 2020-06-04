import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'sharedUI/Icon';

const StyledImage = styled.Image`
	width: 100%;
	height: 100%;
	position: absolute;
	resize-mode: ${({ resizeMode }) => resizeMode};
`;

const BackgroundImage = ({ source, resizeMode }) => (
	<StyledImage source={source} resizeMode={resizeMode} />
);

BackgroundImage.propTypes = {
	source: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	resizeMode: PropTypes.string,
};

BackgroundImage.defaultProps = {
	resizeMode: 'cover',
};

export default BackgroundImage;

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';

import WebScreen from 'sharedUI/WebScreen';

const Dataviz = ({ ...webScreenprops }) => {
	return <WebScreen url="https://oui.surge.sh/" {...webScreenprops} />;
};

Dataviz.propTypes = {};

Dataviz.defaultProps = {};

export default withTheme(Dataviz);

/**
 * @format
 */

import 'react-native';
import React from 'react';

import PlaceHolder from '../src/sharedUI/PlaceHolder';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// A SIMPLE TEST: component PlaceHolder rendered correctly.
it('renders correctly', () => {
	renderer.create(<PlaceHolder />);
});

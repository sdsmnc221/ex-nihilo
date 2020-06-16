/**
 * ASIMPLE TEST: component PlaceHolder rendered correctly.
 */

import 'react-native';
import React from 'react';

import PlaceHolder from '../src/sharedUI/PlaceHolder';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders PlaceHolder correctly', () => {
	const tree = renderer.create(<PlaceHolder />).toJSON();
	expect(tree).toMatchSnapshot();
});

/**
 * A SIMPLE TEST: component PlaceHolder rendered correctly.
 */

import 'react-native';
import React from 'react';
import 'jest-styled-components/native';

import PlaceHolder from 'sharedUI/PlaceHolder/__test';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders PlaceHolder correctly', () => {
	const tree = renderer.create(<PlaceHolder />).toJSON();
	expect(tree).toMatchSnapshot();
});

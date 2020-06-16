/**
 * Data test: load and format fake data correctly
 */

import { contacts } from '../src/states/data';

it('load data correctly', () => {
	jest.mock('../src/states/data', () => {
		return {
			__esModule: true,
			default: jest.fn(() => 42),
			contacts: jest.fn(() => 43),
		};
	});

	contacts();
});

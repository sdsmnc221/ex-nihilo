import { combineReducers } from 'redux';

import permissions from './permissions';
import deviceData from './deviceData';
import fakeData from './fakeData';
import mergedData from './mergedData';
import story from './story';
import game from './game';
import dataviz from './dataviz';

const appReducer = combineReducers({
	permissions,
	deviceData,
	fakeData,
	mergedData,
	story,
	game,
	dataviz,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;

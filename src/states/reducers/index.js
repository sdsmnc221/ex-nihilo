import { combineReducers } from 'redux';

import contacts from './contacts';
import deviceData from './deviceData';
import fakeData from './fakeData';
import mergedData from './mergedData';
import permissions from './permissions';
import story from './story';

const appReducer = combineReducers({
	permissions,
	deviceData,
	fakeData,
	mergedData,
	contacts,
	story,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;

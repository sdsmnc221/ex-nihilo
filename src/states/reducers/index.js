import { combineReducers } from 'redux';

import contacts from './contacts';
import permissions from './permissions';
import story from './story';

const appReducer = combineReducers({ permissions, contacts, story });

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;

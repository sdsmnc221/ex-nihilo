import { combineReducers } from 'redux';

import contacts from './contacts';
import story from './story';

const appReducer = combineReducers({ contacts, story });

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;

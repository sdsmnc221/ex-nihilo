import { combineReducers } from 'redux';

import contacts from './contacts';

const appReducer = combineReducers({ contacts });

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;

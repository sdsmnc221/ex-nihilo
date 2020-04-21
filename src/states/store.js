import { createStore, applyMiddleware, compose } from 'redux';
// import { autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import initialStates from './initialStates';

function create() {
	const middlewares = [thunk];
	const enhancer = compose(applyMiddleware(...middlewares));

	const storeInstance = createStore(rootReducer, initialStates, enhancer);

	return storeInstance;
}

export default function store() {
	return create();
}

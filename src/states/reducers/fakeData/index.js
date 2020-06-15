import initialStates from 'states/initialStates';

function fakeData(state = initialStates.fakeData, action) {
	switch (action.type) {
		default:
			return state;
	}
}

export default fakeData;

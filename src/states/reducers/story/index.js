import initialStates from 'states/initialStates';

function story(state = initialStates.contacts, action) {
	switch (action.type) {
		default:
			return state;
	}
}

export default story;

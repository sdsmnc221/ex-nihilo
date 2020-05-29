import initialStates from 'states/initialStates';

function story(state = initialStates.story, action) {
	switch (action.type) {
		default:
			return state;
	}
}

export default story;

import {Machine} from 'xstate';

const id = 'FETCH';

export const fetchMachine = Machine({
	id,
	initial: 'idle',
	strict: true,
	states: {
		idle: {
			on: {
				FETCH_DATA: 'creatingCancelToken'
			}
		},
		creatingCancelToken: {
			onEntry: ['CREATE_CANCEL_TOKEN'],
			on: {
				TOKEN_CREATED: 'fetchingData'
			}
		},
		fetchingData: {
			onEntry: ['SHOW_LOADING', 'FETCH_DATA'],
			on: {
				SUCCESS: 'idle',
				FAILURE: 'idle'
			},
			onExit: ['HIDE_LOADING']
		}
	}
});

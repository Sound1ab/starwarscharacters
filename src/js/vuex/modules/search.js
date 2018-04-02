import {searchMachine} from '@/js/vuex/FSM/search-machine';
import {transition} from '@/js/vuex/fsm-transition';
import {FETCH_TRANSITION} from '@/js/vuex/modules/fetch';

export const SEARCH_TRANSITION = 'SEARCH_TRANSITION';
export const START_TIMER = 'START_TIMER';
export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const DISPATCHING_SEARCH = 'DISPATCHING_SEARCH';

let timeout;

function initialState () {
	return {
		state: searchMachine.initial,
		query: ''
	};
}

const state = initialState();

const actions = {
	[SEARCH_TRANSITION]: transition.bind(null, searchMachine),
	[START_TIMER] ({dispatch}, {params}) {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			dispatch(SEARCH_TRANSITION, {
				type: 'TIMER_COUNTDOWN_PASSED',
				params
			});
		}, 500);
	},
	[UPDATE_SEARCH] ({commit}, {params: {query = ''}}) {
		commit(UPDATE_SEARCH, query);
	},
	[DISPATCHING_SEARCH] ({dispatch}, {params}) {
		dispatch(FETCH_TRANSITION, {
			type: 'FETCH_DATA',
			params
		});
		dispatch(SEARCH_TRANSITION, {type: 'SEARCH_DISPATCHED'});
	}
};

const mutations = {
	[SEARCH_TRANSITION] (state, nextState) {
		state.state = nextState;
	},
	[UPDATE_SEARCH] (state, query) {
		state.query = query;
	}
};

export default {
	state,
	mutations,
	actions
};

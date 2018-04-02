import axios from 'axios';
import {fetchMachine} from '@/js/vuex/FSM/fetch-machine';
import {transition} from '@/js/vuex/fsm-transition';
import {starWars} from '@/js/vuex/api';

export const FETCH_TRANSITION = 'FETCH_TRANSITION';
export const CREATE_CANCEL_TOKEN = 'CREATE_CANCEL_TOKEN';
export const CANCEL_OUTGOING_REQUEST = 'CANCEL_OUTGOING_REQUEST';
export const FETCH_DATA = 'FETCH_DATA';

function initialState () {
	return {
		state: fetchMachine.initialState,
		cancelToken: null,
		data: {}
	};
}

const state = initialState();

const actions = {
	[FETCH_TRANSITION]: transition.bind(null, fetchMachine),
	[CREATE_CANCEL_TOKEN] ({commit, dispatch}, {params}) {
		let CancelToken = axios.CancelToken;
		let source = CancelToken.source();
		commit(CREATE_CANCEL_TOKEN, source);
		dispatch(FETCH_TRANSITION, {type: 'TOKEN_CREATED', params});
	},
	[CANCEL_OUTGOING_REQUEST] ({state}) {
		if (state.cancelToken) {
			state.cancelToken.cancel();
		}
	},
	[FETCH_DATA] ({commit, dispatch}, {params: {type, page = 0, query = ''}}) {
		const queryString = type === 'SEARCH' && query.length > 0
			? `?page=${page}`
			: `?search=${query}`;
		axios.get(`${starWars['PEOPLE']}${queryString}`)
			.then(res => {
				if (res.status !== 200) {
					throw new Error(res.statusText);
				}
				commit(FETCH_DATA, res.data.results);
				dispatch(FETCH_TRANSITION, {type: 'SUCCESS'});
			})
			.catch(() => {
				dispatch(FETCH_TRANSITION, {type: 'FAILURE'});
			});
	}
};

const mutations = {
	[FETCH_TRANSITION] (state, nextState) {
		state.state = nextState;
	},
	[CREATE_CANCEL_TOKEN] (state, cancelToken) {
		state.cancelToken = cancelToken;
	},
	[FETCH_DATA] (state, payload) {
		state.data = payload;
	}
};

export default {
	state,
	mutations,
	actions
};

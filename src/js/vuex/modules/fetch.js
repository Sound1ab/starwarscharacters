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
		commit('createCancelToken', source);
		dispatch('FETCH_TRANSITION', {type: 'TOKEN_CREATED', params});
	},
	[CANCEL_OUTGOING_REQUEST] ({state}) {
		if (state.cancelToken) {
			state.cancelToken.cancel();
		}
	},
	[FETCH_DATA] ({commit}, payload) {
		commit('FETCH_DATA', payload);
	}
};

const mutations = {
	[FETCH_TRANSITION] (state, nextState) {
		state.state = nextState;
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

export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';
export const SHOW_CONFIRMATION = 'SHOW_CONFIRMATION';

function initialState () {
	return {
		loading: false,
		confirmation: {
			state: false,
			value: '',
			message: ''
		}
	};
}

const state = initialState();

const actions = {
	[SHOW_LOADING] ({commit}) {
		commit(SHOW_LOADING, true);
	},
	[HIDE_LOADING] ({commit}) {
		commit(HIDE_LOADING, false);
	},
	[SHOW_CONFIRMATION] ({commit}, payload) {
		commit(SHOW_CONFIRMATION, payload);
		setTimeout(() => {
			commit(SHOW_CONFIRMATION, initialState().confirmation);
		}, 1000);
	}
};

const mutations = {
	[SHOW_LOADING] (state, payload) {
		state.loading = payload;
	},
	[HIDE_LOADING] (state, payload) {
		state.loading = payload;
	},
	[SHOW_CONFIRMATION] (state, payload) {
		state.loading = payload;
	}
};

export default {
	state,
	mutations,
	actions
};

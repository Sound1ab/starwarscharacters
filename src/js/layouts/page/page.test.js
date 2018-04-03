/* eslint-disable */
import {shallow, createLocalVue} from '@vue/test-utils';
import {createRenderer} from 'vue-server-renderer';
import Vuex from 'vuex';
import Page from './page';
import {FETCH_TRANSITION} from '../../vuex/modules/fetch';

const localVue = createLocalVue();
localVue.use(Vuex);

let mountComponent = (store) => shallow(Page, {
	localVue,
	store,
	mocks: {
		$route: {
			params: {
				id: 2
			}
		}
	}
});

describe('Pagination', () => {
	let wrapper;
	let store;
	let actions;
	beforeEach(() => {
		actions = {
			[FETCH_TRANSITION]: jest.fn()
		};
		store = new Vuex.Store({
			actions,
			getters: {
				PARSED_API_QUERY: () => {},
				CURRENT_PAGE: () => 2
			},
			state: {
				fetch: {
					data: ''
				}
			}
		});
		wrapper = mountComponent(store);
		jest.clearAllMocks();
	});
	afterEach(() => {
		wrapper.destroy();
	});
	describe('htmlStructure', () => {
		it('html snapshot matches', () => {
			expect(wrapper.html()).toMatchSnapshot();
		});
	});
	describe('component', () => {
		it('vm - is instantiated', () => {
			expect(wrapper.isVueInstance()).toBe(true);
		});
	});
});

/* eslint-disable */
import {shallow, createLocalVue} from '@vue/test-utils';
import {createRenderer} from 'vue-server-renderer';
import Vuex from 'vuex';
import Search from './search';
import {SEARCH_TRANSITION} from '../../vuex/modules/search';

const localVue = createLocalVue();
localVue.use(Vuex);

let mountComponent = (store) => shallow(Search, {
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
			[SEARCH_TRANSITION]: jest.fn()
		};
		store = new Vuex.Store({
			actions,
			state: {
				search: {
					query: ''
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
	describe('@events', () => {
		it('should dispatch transition when form input changes', () => {
			wrapper.vm.handleInputChanged('Luke');
			expect(actions[SEARCH_TRANSITION]).toBeCalled();
		});
	});
});

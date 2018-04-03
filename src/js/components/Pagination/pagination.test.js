/* eslint-disable */
import {shallow, createLocalVue} from '@vue/test-utils';
import {createRenderer} from 'vue-server-renderer';
import Vuex from 'vuex';
import * as svgicon from 'vue-svgicon';
import Pagination from './pagination';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(svgicon);

let mountComponent = (store, stub) => shallow(Pagination, {
	localVue,
	store,
	mocks: {
		$route: {
			params: {
				id: 2
			}
		},
		$router: {
			push: stub
		}
	}
});

describe('Pagination', () => {
	let wrapper;
	let store;
	let stub;
	let getters;
	beforeEach(() => {
		stub = jest.fn();
		getters = {
			PARSED_API_QUERY: () => {},
			CURRENT_PAGE: () => 2
		};
		store = new Vuex.Store({
			getters,
			state: {
				fetch: {
					previous: true,
					next: true
				}
			}
		});
		wrapper = mountComponent(store, stub);
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
	describe('interface', () => {
		it('should show the current page number', () => {
			let currentPage = wrapper.find('[data-test="current-page"]');
			expect(currentPage.text()).toBe('2');
		});
		it('should hide left chevron when on first page', () => {
			expect(wrapper.find('[data-test="previous"]').exists()).toBe(true);
			wrapper.vm.$store.state.fetch.previous = false;
			expect(wrapper.find('[data-test="previous"]').exists()).toBe(false);
		});
		it('should hide right chevron when on last page', () => {
			expect(wrapper.find('[data-test="next"]').exists()).toBe(true);
			wrapper.vm.$store.state.fetch.next = false;
			expect(wrapper.find('[data-test="next"]').exists()).toBe(false);
		});
	});
});

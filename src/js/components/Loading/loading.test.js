/* eslint-disable */
import {shallow, createLocalVue} from '@vue/test-utils';
import {createRenderer} from 'vue-server-renderer';
import Vuex from 'vuex';
import Loading from './loading';

const localVue = createLocalVue();
localVue.use(Vuex);

let mountComponent = (store) => shallow(Loading, {
	localVue,
	store
});

describe('Loading', () => {
	let wrapper;
	let store;
	beforeEach(() => {
		store = new Vuex.Store({
			state: {
				ui: {
					loading: true
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
	describe('interface', () => {
		it('should show loading icon when loading state is true', () => {
			expect(wrapper.is('div')).toBe(true);
			wrapper.vm.$store.state.ui.loading = false;
			expect(wrapper.isEmpty()).toBe(true);
		});
	});
});

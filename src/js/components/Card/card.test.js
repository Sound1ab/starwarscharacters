/* eslint-disable */
import {shallow} from '@vue/test-utils';
import {createRenderer} from 'vue-server-renderer';
import Card from './card';

let mountComponent = () => shallow(Card);

describe('Card', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mountComponent();
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

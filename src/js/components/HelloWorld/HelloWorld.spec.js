import {mount} from '@vue/test-utils';
import HelloWorld from './HelloWorld';

const component = mount(HelloWorld, {
	propsData: {
		title: 'Wibble',
		subtitle: 'Wobble'
	}
});
const el = component.element;

describe('HelloWorld.vue', () => {
	it('Should render the title and subtitle props correctly.', () => {
		expect(el.querySelector(`[data-test="title"]`).textContent).toEqual('Wibble');
		expect(el.querySelector(`[data-test="subtitle"]`).textContent).toEqual('Wobble');
	});
});

import Vue from "vue";
import HelloWorld from "./HelloWorld";

const Constructor = Vue.extend(HelloWorld);
const component = new Constructor({
	propsData: {
		title: "Wibble",
		subtitle: "Wobble",
	}
}).$mount();
const el = component.$el;

describe("HelloWorld.vue", () => {
	it("Should render the title and subtitle props correctly.", () => {
		expect(el.querySelector(`[data-test="title"]`).textContent).toEqual("Wibble");
		expect(el.querySelector(`[data-test="subtitle"]`).textContent).toEqual("Wobble");
	});
});

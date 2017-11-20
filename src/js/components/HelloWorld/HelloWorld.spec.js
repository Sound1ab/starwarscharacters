import Vue from "vue";
import HelloWorld from "./HelloWorld";

describe("HelloWorld.vue", () => {
	it("should render correct contents", () => {
		const Constructor = Vue.extend(HelloWorld);
		const vm = new Constructor().$mount();
		expect(vm.$el.querySelector("h1").textContent).to.equal(
			"Hello world - This is a title"
		);
	});
});

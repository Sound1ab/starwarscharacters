import Vue from "vue";
import getField from "@js/helpers/getField";

export default (Component, propsData) => {
	const Ctor = Vue.extend(Component);
    const vm = new Ctor({ propsData }).$mount();
    return vm;
};

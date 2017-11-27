import Vue from "vue";

export default (Component, propsData) => {
	const Ctor = Vue.extend(Component);
    const vm = new Ctor({ propsData }).$mount();
    return vm.$el;
};

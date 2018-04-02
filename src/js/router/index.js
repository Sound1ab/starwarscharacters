import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/js/layouts/page/page';

Vue.use(Router);

export default new Router({
	mode: 'history',
	fallback: false,
	scrollBehavior: () => ({y: 0}),
	routes: [
		{
			path: '/:id',
			name: 'Home',
			component: Home
		},
		{path: '*', redirect: '/1'}
	]
});

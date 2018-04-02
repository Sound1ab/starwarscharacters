import Vue from 'vue';
import Router from 'vue-router';
import Page from '@/js/layouts/page/page';

Vue.use(Router);

export default new Router({
	mode: 'history',
	fallback: false,
	scrollBehavior: () => ({y: 0}),
	routes: [
		{
			path: '/:id',
			name: 'page',
			component: Page
		},
		{path: '*', redirect: '/1'}
	]
});

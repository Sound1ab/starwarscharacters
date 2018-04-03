import Vue from 'vue';
import Router from 'vue-router';
import Page from '@/js/layouts/page/page';

Vue.use(Router);

// Redirect straight to page 1
export default new Router({
	mode: 'history',
	fallback: false,
	scrollBehavior: () => ({y: 0}),
	routes: [
		{
			path: '/',
			name: 'page',
			component: Page
		}
	]
});

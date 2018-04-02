<template>
	<div id="app">
		<loading></loading>
		<search></search>
		<router-view :key="`page-${$route.params.id}`"></router-view>
		<pagination></pagination>
	</div>
</template>

<script>
	import store from './vuex/index';
	import Loading from '@/js/components/Loading/loading';
	import Search from '@/js/components/Search/search';
	import Pagination from '@/js/components/Pagination/pagination';
	export default {
		name: 'app',
		store,
		components: {
			Loading,
			Pagination,
			Search
		}
	};
</script>

<style lang="scss" type="text/scss">
	#app {
		height: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto;
	}
</style>

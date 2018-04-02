<template>
	<div id="app">
		<search></search>
		<router-view/>
		<pagination></pagination>
	</div>
</template>

<script>
	import store from './vuex/index';
	import Search from '@/js/components/Search/search';
	import Pagination from '@/js/components/Pagination/pagination';
	export default {
		name: 'app',
		store,
		components: {
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
		grid-template-rows: 3fr;
	}
</style>

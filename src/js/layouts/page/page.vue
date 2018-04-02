<template>
	<div class="page">
	    hey
	</div>
</template>

<script>
	import VueTypes from 'vue-types';
	import {FETCH_TRANSITION} from '@/js/vuex/modules/fetch';
	export default {
		name: 'page',
		methods: {
			dispatchFetch (page) {
				if (!page) {
					return;
				}
				console.log(page);
				this.$store.dispatch(FETCH_TRANSITION, {
					type: 'FETCH_DATA',
					params: {
						type: 'PAGE',
						page
					}
				});
			},
			onLoad () {
				const page = this.$route.params.id;
				this.dispatchFetch(page);
			}
		},
		created () {
			this.onLoad();
		}
	};
</script>

<style lang="scss" type="text/scss">
	.page {
		position: relative;
	}
</style>

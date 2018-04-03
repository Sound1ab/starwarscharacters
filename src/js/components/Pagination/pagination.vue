<template>
	<div class="pagination">
		<div
			v-if="previous"
			data-test="previous"
			class="pagination__chevron"
			@click="handlePrevious"
		>
			<svgicon
				name="chevron-left"
				:color="'white'"
				width="50"
				height="50"
			>
			</svgicon>
		</div>
		<span data-test="current-page">
			{{CURRENT_PAGE}}
		</span>
		<div
			v-if="next"
			data-test="next"
			class="pagination__chevron"
			@click="handleNext"
		>
			<svgicon
				name="chevron-right"
				:color="'white'"
				width="50"
				height="50"
			>
			</svgicon>
		</div>
	</div>
</template>

<script>
	import '@/assets/compiled-icons/chevron-left';
	import '@/assets/compiled-icons/chevron-right';
	import {mapState, mapGetters} from 'vuex';
	import {FETCH_TRANSITION} from '@/js/vuex/modules/fetch';
	export default {
		name: 'pagination',
		computed: {
			// Previous and next returned from api response
			...mapState({
				previous: state => state.fetch.previous,
				next: state => state.fetch.next,
				query: state => state.search.query
			}),
			...mapGetters([
				'PARSED_API_QUERY',
				'CURRENT_PAGE'
			])
		},
		methods: {
			dispatchFetch (page, direction) {
				const type = this.PARSED_API_QUERY[direction]['search'] ? 'SEARCH' : 'PAGE';
				this.$store.dispatch(FETCH_TRANSITION, {
					type: 'FETCH_DATA',
					params: {
						type,
						page,
						query: this.query
					}
				});
			},
			handlePrevious () {
				this.dispatchFetch(this.PARSED_API_QUERY.previous.page, 'previous');
			},
			handleNext () {
				this.dispatchFetch(this.PARSED_API_QUERY.next.page, 'next');
			}
		}
	};
</script>

<style lang="scss" type="text/scss">
	.pagination {
		padding: em(40);
		display: flex;
		justify-content: center;
		align-items: center;
		&__chevron {
			cursor: pointer;
		}
	}
</style>

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
			{{currentPage}}
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
	import {mapState} from 'vuex';
	export default {
		name: 'pagination',
		computed: {
			// Previous and next returned from api response
			...mapState({
				previous: state => state.fetch.previous,
				next: state => state.fetch.next
			}),
			currentPage () {
				return parseInt(this.$route.params.id, 10);
			}
		},
		methods: {
			handlePrevious () {
				this.$router.push({name: 'page', params: {id: this.currentPage - 1}});
			},
			handleNext () {
				this.$router.push({name: 'page', params: {id: this.currentPage + 1}});
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

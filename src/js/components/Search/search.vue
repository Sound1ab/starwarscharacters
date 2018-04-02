<template>
	<div class="search">
		<form-input
			class="search__form"
			:input="query"
			@inputChanged="handleInputChanged"
		>
		</form-input>
	</div>
</template>

<script>
	import FormInput from '@/js/components/Search/form-input';
	import {mapState} from 'vuex';
	import {SEARCH_TRANSITION} from '@/js/vuex/modules/search';
	export default {
		name: 'search',
		components: {
			FormInput
		},
		computed: {
			...mapState({
				query: state => state.search.query
			})
		},
		methods: {
			handleInputChanged (value) {
				this.$store.dispatch(SEARCH_TRANSITION, {
					type: 'TEXT_INPUT',
					params: {
						type: 'SEARCH',
						query: value,
						page: this.$route.params.id
					}
				});
			}
		}
	};
</script>

<style lang="scss" type="text/scss">
	.search {
		padding: em(40)
	}
</style>

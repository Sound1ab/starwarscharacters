<template>
	<div class="page">
	    <card
			v-for="(person, index) in data"
			:key="`${person.name}-${index}`"
			:name="person.name"
			:gender="person.gender"
			:hair-color="person.hair_color"
			:height="person.height"
			:mass="person.mass"
			:skin-color="person.skin_color"
			:eye-color="person.eye_color"
			:index="index + 1"
		></card>
	</div>
</template>

<script>
	import Card from '@/js/components/Card/card';
	import {FETCH_TRANSITION} from '@/js/vuex/modules/fetch';
	import {mapState} from 'vuex';
	export default {
		name: 'page',
		components: {
			Card
		},
		computed: {
			...mapState({
				data: state => state.fetch.data
			})
		},
		methods: {
			// Function uses the current route id e.g. 1, 2
			// to load the correct page information
			dispatchFetch (page) {
				if (!page) {
					return;
				}
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
		/*position: relative;*/
		padding: em(8);
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		grid-gap: 10px;
	}
</style>

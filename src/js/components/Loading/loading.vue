<template>
	<transition name="fade-up" mode="out-in">
		<div class="loading" v-if="loading">
			<img class="loading__c3po" :src="require('@/assets/c3po.png')" />
		</div>
	</transition>
</template>

<script>
	import {mapState} from 'vuex';
	export default {
		name: 'loading',
		computed: {
			...mapState({
				loading: state => state.ui.loading
			})
		}
	};
</script>

<style lang="scss" type="text/scss">
	.loading {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		&__c3po{
			width: 250px;
			height: 250px;
		}
	}
</style>

<template>
	<div class="card">
		<div class="card__inner">
			hey
		</div>
	</div>
</template>

<script>
	import VueTypes from 'vue-types';
	export default {
		name: 'card',
		props: {
			name: VueTypes.string.def(''),
			gender: VueTypes.string.def(''),
			hairColor: VueTypes.string.def(''),
			height: VueTypes.string.def(''),
			mass: VueTypes.string.def(''),
			skinColor: VueTypes.string.def(''),
			eyeColor: VueTypes.string.def(''),
			index: VueTypes.string.def('')
		}
	};
</script>

<style lang="scss" type="text/scss">
	.card {
		$padding: em(8);
		position: relative;
		width: 100%;
		height: em(328);
		padding: $padding $padding;
		background-color: transparent;
		display: inline-block;
		@include mqMin(xs) {
			width: 50%;
		}
		@include mqMin(m) {
			width: 25%;
		}
		@include mqMin(l) {
			width: 20%;
		}
		&__inner {
			position: relative;
			background-color: white;
			box-shadow: 0 1px 4px 0 rgba(0,0,0,.2);
			width: 100%;
			height: 100%;
			border-radius: 5px;
			display: flex;
			flex-direction: column;
			cursor: pointer;
			transition: all .5s;
			&:hover {
				box-shadow: 0 0 20px 4px rgba(0,0,0,.1);
			}
		}
	}
</style>

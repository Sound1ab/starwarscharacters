<template>
	<div class="card">
		<h1 class="alpha">{{name}}</h1>
		<h2 class="beta">{{gender}}</h2>
		<table class="card__table">
			<tr
				v-for="(attribute, key) in $props"
				v-if="key !== 'name' && key !== 'gender'"
			>
				<td class="card__table-cell">{{key}}</td>
				<td class="card__table-cell">{{attribute}}</td>
			</tr>
		</table>
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
			index: VueTypes.number.def(0)
		}
	};
</script>

<style lang="scss" type="text/scss">
	.card {
		width: 100%;
		height: em(328);
		padding: em(8);
		background-color: white;
		border-radius: 5px;
		box-shadow: 0 1px 4px 0 rgba(0,0,0,.2);
		transition: all .5s;
		&:hover {
			box-shadow: 0 0 20px 4px rgba(0,0,0,.1);
		}
		&__table {
			width: 100%;
		}
		&__table-cell {
			padding: em(8) 0;
		}
	}
</style>

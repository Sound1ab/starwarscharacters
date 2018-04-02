<template>
	<div class="pagination">
	    <span>Previous</span>
		{{$route.params.id}}
	    <span>Next</span>
	</div>
</template>

<script>
	export default {
		name: 'pagination'
	};
</script>

<style lang="scss" type="text/scss">
	.pagination {
		padding: em(40)
	}
</style>

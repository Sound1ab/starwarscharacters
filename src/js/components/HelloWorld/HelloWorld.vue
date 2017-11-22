<template>
	<div>
		<h1 class="alpha">Hello world - This is a title</h1>
		<h2 class="hello__title">This is a scoped style</h2>
	</div>
</template>

<script>
export default {
	name: "HelloWorld",
};
</script>

<style lang="scss" type="text/scss">
	$module: 'hello';

	.#{$module} {
		&__title {
			@extend #{nth($headings, 1)};
			color: red;
		}
	}
</style>

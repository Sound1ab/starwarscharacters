<template>
	<div>
		<h1 class="alpha" data-test="title">{{ title }}</h1>
		<h2 class="hello__title" data-test="subtitle">{{ subtitle }}</h2>
	</div>
</template>

<script>
export default {
	name: "HelloWorld",
	props: {
		title: {
			type: String,
			required: false,
			default: "Hello world",
		},
		subtitle: {
			type: String,
			required: false,
			default: "This is a scoped style",
		},
	},
};
</script>

<style lang="scss" type="text/scss" scoped>
	$module: 'hello';

	.#{$module} {
		&__title {
			@extend #{nth($headings, 2)};
			color: red;
		}
	}
</style>

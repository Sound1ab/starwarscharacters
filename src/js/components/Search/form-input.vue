<template>
	<form @submit.prevent="handleSubmit" class="form-input">
		<input
			ref="input"
			class="form-input__input"
			@blur.stop.capture.prevent="handleBlur"
			v-model="computedInput"
			type="text"
			placeholder="Search..."
		/>
	</form>
</template>

<script>
	import VueTypes from 'vue-types';
	export default {
		name: 'form-input',
		props: {
			input: VueTypes.string.def('')
		},
		computed: {
			computedInput: {
				get () {
					return this.input;
				},
				set (value) {
					this.$emit('inputChanged', value);
				}
			}
		},
		methods: {
			handleBlur () {
				this.$emit('inputBlur');
			},
			handleSubmit () {
				return;
			}
		},
		mounted () {
			const ref = this.$refs['input'];
			ref.focus();
		}
	};
</script>

<style lang="scss" type="text/scss">
	.form-input {
		&__input {
			background-color: white;
			color: black;
			outline: none;
			border: none;
			padding: em(8);
			width: 100%;
			max-width: em(320);
			display: block;
			margin: 0 auto;
		}
	}
</style>

<template>
	<div class="field">
		<input type="text" class="text" name="" />
	</div>
</template>

<script>
	export default {
		name: "Text"
	}
</script>

<style lang="scss" scoped>
	.field {
		display: flex;
		width: 100%;
		min-height: 50px;
		background: transparent;
		border-top: antiquewhite 1px solid;
		&:first-child{
			border-top: none;
		}
	}
</style>
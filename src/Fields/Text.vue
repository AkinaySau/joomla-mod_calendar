<template>
	<div class="field"></div>
</template>

<script>
	export default {
		name: "Afield"
	}
</script>

<style lang="scss">
	.field {
		display: flex;
		width: 50px;
		height: 50px;
		background: grey;
		&__test{
			color: antiquewhite;
		}
		box-sizing: border-box;
	}
</style>
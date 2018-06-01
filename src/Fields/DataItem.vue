<template>
	<div class="items-wrapper">
		<div class="items-wrapper__item" v-for="(item, index) in content">
			<div :class="getID('title',index)">
				<!--<label :for="getID('title',index)"></label>-->
				<input placeholder="Заголовок" type="text" :id="getID('title',index)" v-model="item.title">
				<!--<label :for="getID('text',index)">Заголовок</label>-->
				<textarea placeholder="Текст" :id="getID('text',index)" v-model="item.text"></textarea>
				<!--<label :for="getID('href',index)">Ссылка</label>-->
				<input type="text" placeholder="Ссылка" :id="getID('href',index)" v-model="item.href">
			</div>
			<div class="btn btn-remove" v-on:click="removeItem(index)">
				<span class="icon icon-cancel"></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "DataItem",
		props: ['content'],
		model: {
			prop: 'content'
			// event:update
		},
		methods: {
			getID(prefix, index) {
				return 'item-' + prefix + '-' + index
			},
			removeItem(index) {
				this.content.splice(index, 1);


			}
		}

	}
</script>

<style lang="scss" scoped>
	.items-wrapper {
		display: flex;
		flex-wrap: wrap;
		max-width: 100%;
		&__item {
			padding: 5px;
			width: calc(33% - 10px);
			border: 0 solid #eee;
			border-top-width: 1px;
			border-right-width: 1px;
			&:nth-child(3n) {
				border-right: none;
			}
			@media all and (max-width: 1200px) {
				width: calc(50% - 11px);
				&:nth-child(2n) {
					border-right: none;
				}
			}
			@media all and (max-width: 700px) {
				width: calc(100% - 10px);
				border-right: none;
			}
			input, textarea {
				width: calc(100% - 22px);
				margin: 0;
				padding: 5px 10px;
				border-radius: 0;
				border-bottom: 0;
				&:first-child {
					border-radius: 3px 3px 0 0;
				}
			}
			textarea {
				min-height: 100px;
				resize: vertical;
			}
			.btn-remove {
				border-radius: 0 0 3px 3px;
				margin: 0;
				padding: 0;
				width: calc(100% - 2px);
				line-height: 23px;
			}
		}
	}
</style>
<template>
	<div class="field">
		<div class="btn-toolbar">
			<div class="btn-wrapper">
				<div class="btn button-save-new" v-on:click="addDate()">
					<span class="icon icon-save-new" aria-hidden="true"></span>
					Добавить дату
				</div>
			</div>
		</div>
		<calendar-row
				v-for="(item, key) in dateArr"
				:key="key"
				:index="key"
				:item="item"
				v-on:remove-row="removeDate"
		/>
		<div class="btn-toolbar">
			<div class="btn-wrapper">
				<div class="btn button-save-new" v-on:click="addDate()">
					<span class="icon icon-save-new" aria-hidden="true"></span>
					Добавить дату
				</div>
			</div>
		</div>
		<input type="hidden" v-bind:name="nameField" v-model="dateArrJSONString">
	</div>
</template>

<script>
	import CalendarRow from "./CalendarRow.vue";

	export default {
		name: "CalendarList",
		components: {CalendarRow},
		data: function () {
			return {
				nameField: this.$parent.$data.nameField,
				dateArr: this.$parent.$data.dateArr
			}
		},
		computed: {
			dateArrJSONString: function () {
				return JSON.stringify(this.dateArr);
			}
		},
		methods: {
			removeDate(index) {
				console.log(index);
				this.dateArr.splice(index, 1);
			},
			addDate() {
				this.dateArr.push({
					date: '',
					content: []
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

	@import "../style/_btn";

	.console {
		background-color: azure;
		border: 1px solid grey;
		margin: 10px;
		padding: 10px;
		min-height: 100px;
		min-width: 100px;
	}
</style>
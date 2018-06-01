<template>
	<div class="calendar-row">
		<div class="btn-toolbar">
			<div class="btn-wrapper">
				<flat-pickr
						v-model="date"
						:config="config"
						placeholder="Select a date"
				/>
			</div>
			<div class="btn-wrapper">
				<div class="btn button-save-new" v-on:click="addBlock">
					<span class="icon icon-save-new" aria-hidden="true"></span>
					<span class="btn-title">Добавить блок</span>
				</div>
			</div>
			<div class="btn-wrapper">
				<div class="btn button-cancel" v-on:click="remove">
					<span class="icon icon-cancel" aria-hidden="true"></span>
					<span class="btn-title">Удалить дату</span>
				</div>
			</div>
		</div>
		<data-item
				v-model="content"
		/>
	</div>
</template>

<script>
	import FlatPickr from "vue-flatpickr-component/src/component.vue";
	import DataItem from "./DataItem.vue";

	export default {
		name: "CalendarRow",
		components: {DataItem, FlatPickr},
		props: {
			item: Object,
			index: {
				type: Number,
				required: true
			}
		},
		data() {
			return {
				index() {
					return this.index
				},
				config: {
					wrap: true,
					dateFormat: 'Y-m-d',
				}
			}
		},
		computed: {
			date: {
				get() {
					return this.item.date;
				},
				set(newVal) {
					this.item.date = newVal;
				}
			},
			content: {
				get() {
					return this.item.content;
				},
				set(newVal) {
					this.item.content = newVal;
				}
			},
		},
		methods: {
			remove() {
				this.$emit('remove-row', this.index)
			},
			addBlock() {
				this.content.push({
					title: '',
					text: '',
					href: ''
				});
			}
		},
	}
</script>

<style scoped lang="scss">
	@import '~flatpickr/dist/flatpickr.css';

	.calendar-row {
		display: block;
		width: 100%;
		border-bottom: 1px solid #eee;
		&:last-child {
			border-bottom: none;
		}
		.btn-toolbar {
			background-color: #959ea9;
			padding: 5px;
			margin-bottom: 0;
			.btn-wrapper {
				margin: 5px;
				@import "../style/_btn";

				@media all and (max-width: 850px) {
					width: fit-content;
					.btn {
						padding: 0;

						.icon {
							width: 100%;
							min-width: 50px;
							margin: 0;
							border: 0;
							border-radius: 3px;
						}
						.btn-title {
							display: none
						}
					}
				}
			}
		}
	}
</style>
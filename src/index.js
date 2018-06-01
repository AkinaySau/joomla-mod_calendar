'use strict';
import Vue from 'vue'
import Field_Text from './Fields/Text.vue';
import Field_CalendarList from './Fields/CalendarList.vue';

window.onload = function () {
	new Vue({
		el: '.vue-sauFieldText',
		render: h => h(Field_Text)
	});


	new Vue({
		el: '.vue-sauFieldSCalendarList',
		data: function () {
			return {
				dateArr: [],
				nameField: ''
			}
		},
		beforeMount: function () {
			this.dateArr = JSON.parse(this.$el.attributes['data-value'].value);
			this.nameField = this.$el.attributes['data-name'].value;
		},
		render: h => h(Field_CalendarList)
	});
};
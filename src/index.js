'use strict';
import Vue from 'vue'
import Field_Text from './Fields/Text.vue';

window.onload = function () {
	new Vue({
		el: '.vue-sauFieldText',
		render: h => h(Field_Text)
	});
};
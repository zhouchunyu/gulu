import Vue from 'vue';

import Button from './Button';
import Icon from './Icon';
import Input from './Input'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-input', Input);

new Vue({
    el: '#app',
    data: {
        loading1: false
    }
})
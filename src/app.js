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

import chai from 'chai';

const expect = chai.expect;
// 单元测试
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {icon: 'config'}
    });
    button.$mount('#test')
    const useElement = button.$el.querySelector('use');
    expect(useElement.getAttribute('xlink:href')).to.eq('#icon-config');
}
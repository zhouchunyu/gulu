import Vue from 'vue';

import Button from './Button';
import Icon from './Icon';
import Input from './Input';
import Col from './Col';
import Row from './Row';


Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-input', Input);
Vue.component('g-col', Col);
Vue.component('g-row', Row);



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
        propsData: {
            icon: 'config',
            loading: true
        }
    });
    button.$mount()
    const useElement = button.$el.querySelector('use');
    expect(useElement.getAttribute('xlink:href')).to.eq('#icon-loading');
}
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'config',
            loading: true,
            iconPosition: 'right'
        }
    });
    button.$mount('#test')
    const svg = button.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq('2');
}


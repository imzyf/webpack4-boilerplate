import Vue from 'vue';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import App from 'Pages/app.vue';
import router from '@/router/router';

import './assets/styles/reset.css';
import './assets/styles/public.scss';


// import bgImg from './images/spikes.png';

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(VueRouter);

if (module.hot) {
  module.hot.accept();
}

// const func = (str) => {
//   document.getElementById('app').innerHTML = str;
// };
// func('我现在在使用 es6 新语法-箭头函数!');

// document.getElementById(
//   'postcss',
// ).innerHTML = `<h1>我自动添加了浏览器前缀</h1><img src='${bgImg}'/>`;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

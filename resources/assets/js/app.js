require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from './components/Planner'

const planner = new Vue({
  el: '#app',
  components:{App}
});
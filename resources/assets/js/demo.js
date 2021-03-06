
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import App from './democomponents/App'
import Home from './democomponents/Home'
import Hello from './democomponents/Hello'
import UsersIndex from './democomponents/UsersIndex'

const router = new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			name:'home',
			component:Home
		},
		{
			path:'/hello',
			name:'hello',
			component:Hello
		},
		{
			path: '/users',
			name: 'users.index',
			component: UsersIndex,
		},
	]
});

const app = new Vue({
    el: '#app',
	components:{App},
	router
});

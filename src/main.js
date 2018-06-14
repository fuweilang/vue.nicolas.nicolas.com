// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import api from './configs/api';
import ajax from './core/plugins/ajax';

Vue.config.productionTip = false;

const env = process.env;

Vue.use(ajax, {
    baseURL: api[env.NODE_ENV].baseUrl
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});

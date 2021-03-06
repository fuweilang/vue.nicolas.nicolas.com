import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        login: login
    }
});

export default store;

import Vue from 'vue';
const Login = {
    state: {
        user: {
            name: 'lucy',
            age: 18
        }
    },
    mutations: {
        getUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        setUser(context, payload) {
            console.log(Vue.ajax);
            context.commit('getUser', payload);
        }
    },
    getters: {
        getUser: state => {
            return state.user;
        }
    }
};
export default Login;

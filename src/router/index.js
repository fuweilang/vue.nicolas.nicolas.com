import Vue from 'vue';
import Router from 'vue-router';
import User from '@/components/user';
import Message from '@/components/message';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/user',
            name: 'user',
            component: User
        },
        {
            path: '/message',
            name: 'message',
            component: Message
        },
        {
            path: '/',
            redirect: '/user'
        }
    ]
});

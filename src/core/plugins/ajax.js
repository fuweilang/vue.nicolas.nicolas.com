import axios from 'axios';

let Ajax = {};

Ajax.install = (Vue, options) => {
    options = options || {};
    let instance = axios.create({
        baseURL: options.baseURL
    });

    Vue.ajax = instance;
    Vue.prototype.$ajax = instance;
};

export default Ajax;

const api = {
    'development': {
        uploadUrl: 'http://172.25.16.167:1024',
        baseUrl: 'http://172.25.16.167:1024',
        h5StaticUrl: 'http://172.25.16.167:1024/static'
    },
    'production': {
        uploadUrl: 'http://127.0.0.1:7001/api/page/upload',
        baseUrl: 'http://127.0.0.1:7001/api',
        h5StaticUrl: 'http://127.0.0.1:8082/static'
    }
};

export default api;

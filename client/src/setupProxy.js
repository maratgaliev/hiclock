const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api/v1',
        { target: process.env.REACT_APP_CONNECT_STRING }
    ));
}

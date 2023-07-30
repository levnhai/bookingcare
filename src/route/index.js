const webRouter = require('./web');
function routes(app) {
    app.use('/', webRouter)
};

module.exports = routes;
const homeRouter = require('./home');
const crudRouter = require('./crud');
const apiRouter = require('./api');
function routes(app) {
    app.use('/', homeRouter)
    app.use('/crud', crudRouter)
    app.use('/api', apiRouter)
};

module.exports = routes;
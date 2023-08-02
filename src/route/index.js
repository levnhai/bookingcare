const homeRouter = require('./home');
const crudRouter = require('./crud');
function routes(app) {
    app.use('/', homeRouter)
    app.use('/crud', crudRouter)
};

module.exports = routes;
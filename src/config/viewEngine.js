const handlebars = require('express-handlebars');

const setupViewEngine = (app) => {
    app.engine('hbs', handlebars.engine({
        extname: 'hbs',
        // layoutsDir: './src/views/layouts',
        // defaultLayout: 'main'
    }));
    app.set('view engine', 'hbs');
    app.set('views', './src/views');
}

module.exports = setupViewEngine;

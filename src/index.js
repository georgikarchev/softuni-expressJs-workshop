const express = require('express');
const app = express();

const config = require('./config');
const setupViewEngine = require('./config/viewEngine');

setupViewEngine(app);
// this line does the same as the upper two lines
// require('./config/viewEngine')(app);

// setup static assets
app.use(express.static('./public'));


app.get('/', (req, res) => {
    // res.send("Home page");
    // layout doesn't have to be explicitly defined when using the default/main layout
    // res.render('home', {layout: 'main'});
    res.render('home', );
});

app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`));
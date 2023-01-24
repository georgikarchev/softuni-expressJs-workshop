const express = require('express');
const config = require('./config');

console.log("->>",process.env.node_env);

const app = express();

app.get('/', (req, res) => {
    res.write("Homepage")
});

app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`));
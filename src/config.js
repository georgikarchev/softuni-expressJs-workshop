const config = {
    production: {
        PORT: 5060,
    },
    development: {
        PORT: 5050,
    }
};

module.exports = config[process.env.node_env || 'development'];
// module.exports = config['development'];
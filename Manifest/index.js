'use strict'

const Seneca = require('seneca')({
    strict: {//El strict: false indica que Seneca permite responder cadena planas a demas de objects y arrays
        result: false
    }
});

Seneca.use('./actions');

Seneca.listen({
    type: 'http',
    host: '127.0.0.1',
    port: 3001
});
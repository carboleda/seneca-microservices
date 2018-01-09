'use strict'

const Chairo = require('chairo');
const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({host: 'localhost', port: 8080});

server.register({register: Chairo})
.then(() => {
    const seneca = server.seneca;

    seneca
    .client({port: 3001, pin: 'role:manifest'})
    .client({port: 3002, pin: 'role:noveltyTypes'});

    require('./handlers')(server);
});

//Fuente: https://github.com/hapijs/boom/issues/49#issuecomment-90514349
server.ext('onPreResponse', (request, reply) => {
    let response = request.response;
    //console.log('======= onPreResponse =======', response.source);
    /*if (!response.isBoom) {
        return reply.continue();
    }
    if (response.data) {
        response.output.payload.data = response.data;
    }*/
    if(response.source && response.source.success === false) {
        console.log('***** FAILED response, updating statusCode *****');
        //Se divide entre ResponseMessages.STATUS_CODE_DIVIDER para obtener los digitos del status code HTTP
        response.statusCode = parseInt(response.source.code/1000);
    }
    return reply(response);
});

server.start(() => {
    console.log(`Server ApiProxy running at ${server.info.uri}`);
});
'use strict'

module.exports = function(server) {
    server.route({
        method: 'POST',
        path: '/Manifest',
        handler: getManifest
    });

    server.route({
        method: 'GET',
        path: '/NoveltyTypes',
        handler: getNoveltyTypes
    });

    function getManifest(request, reply) {
        //GET, DELETE => request.params
        //POST, PUT => request.payload
        return reply.act({role: 'manifest', cmd: 'getManifest', args: request.payload});
    }

    function getNoveltyTypes(request, reply) {
        return reply.act({role: 'noveltyTypes', cmd: 'getNoveltyTypes', args: request.params});
    }
}
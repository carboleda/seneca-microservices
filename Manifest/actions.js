'use strict'

module.exports = function () {
    const Seneca = this;

    Seneca.add({ role: 'manifest', cmd: 'getManifest' }, getManifest);

    function getManifest(payload, reply) {
        const { manifest, document } = payload.args;
        console.log('getManifest::manifest, document', manifest, document);
        if(manifest == "8491014" && document == "8674628") {
            reply(require('./responses/ok'));
        } else if(manifest == "8491014" && document == "12345") {
            reply(require('./responses/invalid_document'));
        } else if(manifest == "567890" && document == "8674628") {
            reply(require('./responses/manifest_without_rows'));
        } else {
            reply(require('./responses/invalid_manifest'));
        }
    }
};
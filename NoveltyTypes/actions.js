'use strict'

module.exports = function () {
    const Seneca = this;

    Seneca.add({ role: 'noveltyTypes', cmd: 'getNoveltyTypes' }, getNoveltyTypes);

    function getNoveltyTypes(payload, reply) {
        reply({
            "code": 200001,
            "success": true,
            "message": "Successfully",
            "data": [
                {
                    id: 1,
                    name: 'Tipo novedad 1',
                    category: 1
                },
                {
                    id: 2,
                    name: 'Tipo novedad 2',
                    category: 1
                },
                {
                    id: 3,
                    name: 'Tipo novedad 3',
                    category: 1
                },
                {
                    id: 4,
                    name: 'Tipo novedad 4',
                    category: 0
                }
            ]
        });
    }
};
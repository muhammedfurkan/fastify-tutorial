const fastifyPlugin = require("fastify-plugin");
const { v4: uuidv4 } = require('uuid');
module.exports = fastifyPlugin(async function (fastify, options) {
    fastify.decorate("uuid", function () {
        return uuidv4();
    })
})
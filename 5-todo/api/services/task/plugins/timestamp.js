const fastifyPlugin = require("fastify-plugin");

module.exports = fastifyPlugin(async function (fastify, options) {
    fastify.decorate("timestamp", function () {
        return Date.now();
    })
})
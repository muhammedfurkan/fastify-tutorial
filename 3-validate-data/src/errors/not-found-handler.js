const fastifyPlugin = require("fastify-plugin");
const notFoundError = async function (request, reply) {
    console.log("🐞 Not found");
    return reply.send({
        result: null,
        message: "not found route",
        status: "error"
    })
}

module.exports = fastifyPlugin(notFoundError);
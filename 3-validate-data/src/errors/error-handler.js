const fastifyPlugin = require("fastify-plugin");
const errorHandler = async function (error, request, reply) {
    console.log(error);
    if (error) {
        console.log("💥💥💥 error 💥💥💥");
    }
    // Send error response
}

module.exports = fastifyPlugin(errorHandler);
const fastifyPlugin = require("fastify-plugin");

module.exports = fastifyPlugin(async function (fastify, options, next) {
    fastify.register(require("@fastify/mongodb"), {
        url: "mongodb://localhost:27017/todoDb"
    });
    console.log("👉 connected to mongodb");
})
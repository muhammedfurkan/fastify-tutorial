const fastifyPlugin = require("fastify-plugin");

module.exports = fastifyPlugin(async function (fastify, options) {
    await fastify.register(require("@fastify/middie"));
    await fastify.register(require("@fastify/cors"))
    await fastify.register(require("@fastify/helmet"))
    // fastify.addHook("onRequest", (request, replay, next) => {
    //     console.log("On request hook");
    //     next();
    // });

    // fastify.addHook("preHandler", (request, replay, next) => {
    //     console.log("pre handler hook");
    //     next();
    // });


    // fastify.use((request, replay, next) => {
    //     console.log("use middleware");
    //     next();
    // });

    // console.log("👉 Subsystem loaded");
})
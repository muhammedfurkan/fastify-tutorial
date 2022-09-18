
const setSubsystem = async function (fastify, options) {
    await fastify.register(require('@fastify/middie'));

    fastify.addHook("onRequest", (request, replay, next) => {
        console.log("On request hook");
        next();
    });

    fastify.addHook("preHandler", (request, replay, next) => {
        console.log("pre handler hook");
        next();
    });


    fastify.use((request, replay, next) => {
        console.log("use middleware");
        next();
    });
}

module.exports = { setSubsystem };
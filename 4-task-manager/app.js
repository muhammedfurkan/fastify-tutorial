const Fastify = require("fastify");
const { build } = require("./api/server");

// init fastify clone
const app = Fastify({
    logger: true
})

// start server
build(app).then(fastify => {
    fastify.listen({ port: 3000 }, (err, address) => {
        if (err) {
            fastify.log.error(err);
            process.exit(1);
        }
        fastify.log.info(`Server started on ${address}`)
    })
}).catch(error => {
    console.log(error);
})
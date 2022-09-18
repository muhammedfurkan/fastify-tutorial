const { build } = require("./api");

const start = async () => {
    const fastify = require("fastify")({
        logger: true
    });

    build(fastify).then(() => {
        fastify.listen({ port: 3000 }, (err, address) => {
            if (err) {
                fastify.log.error(err);
                process.exit(1);
            }
            fastify.log.info(`Server started on ${address}`)
        })
    });
}

start();
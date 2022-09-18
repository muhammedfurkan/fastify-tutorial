const fastify = require("fastify")({
	logger: true,
});

fastify.register(require("./mongodb"), {
	url: "mongodb://localhost:27017/",
});
fastify.register(require("./first-route"));

fastify.listen({ port: 3000 }, function (err, address) {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
	fastify.log.info(`server running on ${address}`);
});

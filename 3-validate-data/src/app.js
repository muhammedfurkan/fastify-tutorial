const app = async function (fastifyClone) {
	// plugins
	fastifyClone.register(require("./plugins/mongodb"), {
		url: "mongodb://localhost:27017/",
	});

	fastifyClone.setErrorHandler(require("./errors/error-handler"))
	fastifyClone.setNotFoundHandler(require("./errors/not-found-handler"))

	// routes
	// fastifyClone.register(require("./routes/task.v2"), { prefix: "/api/v1", logLevel: "info" });
	fastifyClone.register(
		require("./routes/task.v2"),
		{ prefix: "/api/v1", logLevel: "info" },
		{ config: { output: 'hello world!' } }
	);

	// start
	fastifyClone.listen({ port: 3000 }, function (err, address) {
		if (err) {
			fastifyClone.log.error(err);
			process.exit(1);
		}
		fastifyClone.log.info(`server running on ${address}`);
	});

	return fastifyClone;
};

module.exports = { app };

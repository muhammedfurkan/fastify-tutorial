const app = async function (fastifyClone) {
	// plugins
	fastifyClone.register(require("./plugins/mongodb"), {
		url: "mongodb://localhost:27017/",
	});

	// routes
	fastifyClone.register(require("./routes/index"));

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

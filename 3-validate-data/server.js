const fastify = require("fastify")({
	logger: true,
});
const { app } = require("./src/app");

const start = async () => {
	await app(fastify);
};

start();

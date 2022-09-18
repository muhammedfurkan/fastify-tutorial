const fastifyPlugin = require("fastify-plugin");
const { MongoClient } = require("mongodb");

async function connectDb(fastify, options) {
	const url = options.url;
	delete options.url;
	const db = await MongoClient.connect(url, options);
	fastify.decorate("mongodb", db);
}

module.exports = fastifyPlugin(connectDb);

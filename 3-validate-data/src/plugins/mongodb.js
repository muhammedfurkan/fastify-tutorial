const fastifyPlugin = require("fastify-plugin");
const { MongoClient } = require("mongodb");

async function connectDb(fastify, options) {
	try {
		const url = options.url;
		delete options.url;
		const db = await MongoClient.connect(url, options);
		fastify.decorate("mongodb", db);
		console.log("👉 Connected to Mongodb ...");
	} catch (error) {
		fastify.log.error(`💥 ${error}`);
		process.exit(1);
	}
}

module.exports = fastifyPlugin(connectDb);

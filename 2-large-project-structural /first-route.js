async function routes(fastify, options) {
	const mongodb = await fastify.mongodb.db("test-db");
	const collection = await mongodb.collection("test");

	fastify.get("/", async (request, replay) => {
		replay.send({ hello: "world" });
	});

	fastify.get("/search/:id", async (request, replay) => {
		const result = await collection.findOne({ _id: request.params.id });
		replay.send(result);
	});
}

module.exports = routes;

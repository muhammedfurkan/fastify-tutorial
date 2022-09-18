const fastifyPlugin = require("fastify-plugin");

const schema = {
    body: {
        type: "object",
        properties: {
            name: { type: "string" },
        }
    }
}



module.exports = fastifyPlugin(async function (fastify, options) {

    // load mongo
    this.collection = await fastify.mongo.db.collection("tasks");

    // load decorators
    this.uuid = await fastify.uuid;
    this.timestamp = await fastify.timestamp;

    fastify.post("/tasks",
        { schema: schema },
        async (request, replay) => {
            const { name } = request.body;
            return this.collection.insertOne({
                _id: this.uuid(),
                name: name,
                timestamp: this.timestamp(),
                done: false
            });
        });
});
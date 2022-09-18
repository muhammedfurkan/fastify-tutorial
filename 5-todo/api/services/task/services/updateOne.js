const fastifyPlugin = require("fastify-plugin");

const schema = {
    body: {
        type: "object",
        properties: {
            name: { type: "string" },
        }
    },

    params: {
        type: "object",
        properties: {
            name: { type: "string" }
        }
    }
}

module.exports = fastifyPlugin(async function (fastify, options) {
    fastify.put("/tasks/:taskId",
        { schema: schema },
        async (request, replay) => {
            const { taskId } = request.params;
            return this.collection.updateOne({ _id: taskId }, { $set: { ...request.body } });
        });
});
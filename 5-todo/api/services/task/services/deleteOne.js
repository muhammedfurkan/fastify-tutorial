const fastifyPlugin = require("fastify-plugin");

const schema = {
    params: {
        type: "object",
        properties: {
            name: { type: "string" }
        }
    }
}

module.exports = fastifyPlugin(async function (fastify, options) {
    fastify.delete("/tasks/:taskId",
        { schema: schema },
        async (request, replay) => {
            const { taskId } = request.params;
            return this.collection.deleteOne({
                _id: taskId
            });
        });
});
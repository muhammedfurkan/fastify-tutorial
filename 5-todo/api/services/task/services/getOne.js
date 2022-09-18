const fastifyPlugin = require("fastify-plugin");

const schema = {
    response: {
        200: {
            type: "object",
            properties: {
                _id: { type: "string" },
                name: { type: "string" },
                timestamp: { type: "integer" },
                done: { type: "boolean" }
            }
        },
        404: {
            type: "object",
            properties: {
                message: { type: "string" },
                status: { type: "string", default: "fail" },
            }
        }
    },

    params: {
        type: "object",
        properties: {
            taskId: { type: "string" }
        }
    }
}


module.exports = fastifyPlugin(async function (fastify, options) {
    return fastify.get("/tasks/:taskId",
        { schema: schema },
        async (request, replay) => {
            const { taskId } = request.params;
            const task = await this.collection.findOne({ _id: taskId })
            if (!task) {
                return replay.callNotFound();
            }
            replay.send(task)
        });
});
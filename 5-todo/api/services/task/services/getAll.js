const fastifyPlugin = require("fastify-plugin");

const schema = {
    response: {
        200: {
            type: "array",
            items: {
                properties: {
                    _id: { type: "string" },
                    name: { type: "string" },
                    timestamp: { type: "integer" },
                    done: { type: "boolean" }
                }
            }
        }
    },

    querystring: {
        limit: { type: "integer" },
        offset: { type: "integer" }
    }
}

module.exports = fastifyPlugin(async function (fastify, options) {

    fastify.addHook("onRequest", (request, replay, done) => {
        console.log("Tasks");
        done();
    })

    fastify.get("/tasks",
        { schema: schema },
        async (request, replay) => {
            return this.collection.find({}).toArray()
        });
});
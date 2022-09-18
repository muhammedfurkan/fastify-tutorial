const taskSchemas = require("../schemas/task");
const taskRoutes = function (fastify, options, next) {
    const collectionName = "tasks";
    // get all
    fastify.route({
        method: "GET",
        url: "/tasks",
        schema: taskSchemas.getAll,
        handler: async function (request, replay) {
            const collection = await this.mongo.db.collection(collectionName);
            const results = await collection.find({}).toArray();
            replay.send({ result: results });
        }
    })

    next();
}

module.exports = taskRoutes;
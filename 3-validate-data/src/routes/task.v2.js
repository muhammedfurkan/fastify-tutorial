const taskSchemas = require("../controllers/schemas/task");
const taskController = require("../controllers/handlers/task");

async function routes(fastify, options) {
    // connect to db
    const mongodb = await fastify.mongodb.db("todo-db");
    const collection = await mongodb.collection("tasks");
    // init controller
    const controller = new taskController(collection);

    fastify.route({
        method: "GET",
        url: "/tasks",
        schema: taskSchemas.getAll,
        handler: controller.getAll
    });

    fastify.route({
        method: "GET",
        url: "/tasks/:taskId",
        schema: taskSchemas.getOne,
        handler: controller.getOne
    });

}


module.exports = routes;

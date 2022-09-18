const taskSchemas = require("../controllers/schemas/task");
const taskController = require("../controllers/handlers/task");

async function routes(fastify, options) {
	// connect to db
	const mongodb = await fastify.mongodb.db("todo-db");
	const collection = await mongodb.collection("tasks");
	// init controller
	const controller = new taskController(collection);



	fastify.setErrorHandler(function (error, request, reply) {
		request.log.error(error, `This error has status code ${error.statusCode}`)
		reply.status(error.statusCode).send(error)
	});

	// fastify.get("/tasks", {
	// 	schema: taskSchemas.getAll,
	// 	preHandler: async (request, replay) => {
	// 		console.log(fastify.server);
	// 	},
	// 	handler: controller.getAll
	// });

	// fastify.get("/tasks/:taskId", {
	// 	schema: taskSchemas.getOne,
	// 	handler: controller.getOne
	// });

	// fastify.post("/tasks", {
	// 	schema: taskSchemas.createOne,
	// 	handler: controller.createOne
	// });

	// fastify.delete("/tasks/:taskId", {
	// 	schema: taskSchemas.deleteOne,
	// 	handler: controller.deleteOne
	// });

	// fastify.put("/tasks/:taskId", {
	// 	schema: taskSchemas.updateOne,
	// 	handler: controller.updateOne
	// });
}


module.exports = routes;

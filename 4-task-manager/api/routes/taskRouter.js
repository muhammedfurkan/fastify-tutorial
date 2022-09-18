const taskSchemas = require("../schemas/task");
const { uuid } = require("uuid").v4();

const tasksRouter = async function (fastify, options) {
    const collectionName = "tasks";

    fastify.get("/tasks",
        { schema: taskSchemas.getAll },
        async function (request, replay) {
            const collection = await this.mongo.db.collection(collectionName);
            const results = await collection.find({}).toArray();
            replay.send({ result: results });
        });

    fastify.get("/tasks/:taskId", async function (request, replay) {
        const selectedId = this.mongo.ObjectId(request.params.taskId);
        const collection = await this.mongo.db.collection(collectionName);
        const result = await collection.findOne({ _id: selectedId });
        replay.send(result);
    });

    fastify.delete("/tasks/:taskId", async function (request, replay) {
        const selectedId = this.mongo.ObjectId(request.params.taskId);
        const collection = await this.mongo.db.collection(collectionName);
        const result = await collection.deleteOne({ _id: selectedId });
        replay.send(result);
    });

    fastify.put("/tasks/:taskId",
        { schema: taskSchemas.updateOne },
        async function (request, replay) {
            const selectedId = this.mongo.ObjectId(request.params.taskId);
            const collection = await this.mongo.db.collection(collectionName);
            const result = await collection.updateOne(
                { _id: selectedId },
                {
                    $set: {
                        title: request.body.title,
                        content: request.body.content
                    }
                }
            );
            replay.send(result);
        });

    fastify.post("/tasks",
        { schema: taskSchemas.createOne },
        async function (request, replay) {
            const collection = await this.mongo.db.collection(collectionName);
            const task = await collection.insertOne({
                title: request.body.title,
                content: request.body.content,
                isCompleted: false,
                createdDate: new Date().toISOString()
            });

            const insertedId = this.mongo.ObjectId(task.insertedId)
            const result = await collection.findOne({ _id: insertedId });

            replay.send(result);
        });
}

module.exports = tasksRouter;
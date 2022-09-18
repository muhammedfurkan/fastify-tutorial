const { ObjectId } = require("mongodb");
class taskController {
    constructor(collection) {
        this.collection = collection;
    }

    getAll = async (request, replay) => {
        const tasks = await this.collection.find({}).toArray();
        replay.context.config.target = "1"
        replay.send(tasks);
    };

    getOne = async (request, replay) => {
        const { taskId } = request.params;
        const result = await this.collection.findOne({ _id: ObjectId(taskId) });
        replay.send(result);
    }

    createOne = async (request, replay) => {
        try {
            const { title, content, targetUser } = request.body;
            const result = await this.collection.insertOne({ title, content, targetUser });
            const response = await this.collection.findOne({ _id: result.insertedId });
            replay.send(response);
        } catch (error) {
            console.log(error);
        }
    }

    deleteOne = async (request, replay) => {
        try {
            const { taskId } = request.params;
            await this.collection.deleteOne({ _id: ObjectId(taskId) });
            replay.send({ result: null });
        } catch (error) {
            console.log(error);
        }
    }

    updateOne = async (request, replay) => {
        try {
            const { taskId } = request.params;
            const { title, content, targetUser } = request.body;
            const result = await this.collection.updateOne(
                { _id: ObjectId(taskId) },
                { $set: { title, content, targetUser } }
            );
            console.log(result);
            replay.send({ result: null });
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = taskController;
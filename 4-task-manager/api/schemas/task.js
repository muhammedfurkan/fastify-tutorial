
const task = {
    title: "Task",
    type: "object",
    properties: {
        title: { type: "string" },
        content: { type: "string" },
        isCompleted: { type: "boolean", default: false },
        createdAt: { type: "string" },
    },
    required: ["title", "content"]
}
const taskSchemas = {
    createOne: {
        body: task
    },

    updateOne: {
        params: {
            type: "object",
            properties: {
                taskId: { type: "string" }
            },
            required: ["taskId"]
        },

        body: task
    },

    deleteOne: {
        params: {
            type: "object",
            properties: {
                taskId: { type: "string" }
            },
            required: ["taskId"]
        },
    },

    getAll: {
        response: {
            200: {
                type: "object",
                properties: {
                    result: {
                        type: "array",
                        items: {
                            title: "Task",
                            type: "object",
                            properties: {
                                _id: { type: "string" },
                                title: { type: "string" },
                                content: { type: "string" },
                                isCompleted: { type: "boolean", default: false },
                                createdDate: { type: "string" },
                            },
                        }
                    }
                }
            },

        }
    }
}


module.exports = taskSchemas;
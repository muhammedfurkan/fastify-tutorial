const taskSchema = {
    getAll: {
        response: {
            200: {
                // "title": "Test if it is a number",
                // "description": "A data is considered a number if is an integer or a float.",
                // "examples": [-5.10, -2, 0, 5, 8.10],

                type: "array",
                items: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        title: { type: "string" },
                        content: { type: "string" },
                        targetUser: { type: "string" },
                        // output: { type: "string" }
                    }
                }
            }
        }
    },

    getOne: {
        response: {
            200: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        _id: { type: "string" },
                        title: { type: "string" },
                        content: { type: "string" },
                        targetUser: { type: "string" }
                    }
                }
            }
        }
    },

    createOne: {
        body: {
            type: "object",
            properties: {
                title: { type: "string" },
                content: { type: "string" },
                targetUser: { type: "string" }
            },
            required: ["title", "content", "targetUser"]
        },
    },

    deleteOne: {
        params: {
            type: "object",
            properties: {
                taskId: { type: "string" }
            }
        },
        response: {
            200: {
                type: "object",
                properties: {
                    result: { type: "null" },
                    status: { type: "string", default: "success" }
                }
            }
        }
    },

    updateOne: {
        params: {
            type: "object",
            properties: {
                taskId: { type: "string" }
            }
        },

        body: {
            type: "object",
            properties: {
                title: { type: "string" },
                content: { type: "string" },
                targetUser: { type: "string" }
            },
            required: ["title", "content", "targetUser"]
        },
    }
}

module.exports = taskSchema;
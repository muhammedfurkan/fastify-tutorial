const connectDb = async (fastify, url) => {
    fastify.register(require("@fastify/mongodb"), {
        forceClose: true,
        //url: "mongodb://localhost:27017"
        url: url
    });

    console.log("👉 connected to mongodb");
}

module.exports = {
    connectDb
}
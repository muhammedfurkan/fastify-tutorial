const tasksRouter = require("./routes/taskRouter");
const { notFoundErrorHandler } = require("./errors/not-found");
const { errorHandler } = require("./errors/error-handler");
const { setSubsystem } = require("./plugins/subsystem");
const { connectDb } = require("./plugins/mongodb");
async function build(server) {
    // plugins
    await connectDb(server, "mongodb://localhost:27017/tasks-db");
    // routes
    await server.register(tasksRouter, { prefix: "/api/v1" });
    await setSubsystem(server);
    // errors
    await server.setNotFoundHandler(notFoundErrorHandler);
    await server.setErrorHandler(errorHandler);
    // decorators
    // server.decorate("utils", (firstName, lastName) => {
    //     return firstName + " " + lastName;
    // });
    // console.log(server.utils("Mert", "Yusuf"));
    // console.log(server.hasDecorator("utils"));
    // console.log(server.hasRequestDecorator("utils"));
    // console.log(server.hasReplyDecorator("utils"));
    return server;
}








module.exports = { build }

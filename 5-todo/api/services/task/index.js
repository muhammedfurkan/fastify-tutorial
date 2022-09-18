const AutoLoad = require("@fastify/autoload");
const path = require("path");
const build = async function (fastify, options) {
    console.log("👉 Start building tasks app");
    // register all plugins
    fastify.register(AutoLoad, {
        dir: path.join(__dirname, "plugins"),
        options: Object.assign({}, options)
    });
    // register all services
    fastify.register(AutoLoad, {
        dir: path.join(__dirname, "services"),
        options: Object.assign({}, options)
    });

    return fastify;
}

module.exports = { build }
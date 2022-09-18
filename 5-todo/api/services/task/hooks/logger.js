const myLogger = (request, replay, next) => {
    console.log("👉 Task hook");
    next();
}
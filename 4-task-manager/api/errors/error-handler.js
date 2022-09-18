const errorHandler = function (error, request, replay) {
    let errorResponse = {};
    if (error.validation) {
        errorResponse = {
            result: null,
            error: {
                status: "failed",
                title: "Validation Error",
                message: error.validation[0].message,
                statusCode: error.statusCode
            }
        }
    } else {
        errorResponse = error
    }
    replay.send(errorResponse)
}

module.exports = { errorHandler };
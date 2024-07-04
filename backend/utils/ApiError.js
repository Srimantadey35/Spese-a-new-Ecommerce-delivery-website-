class ApiError extends Error{
    constructor(
        messege = "something went wrong",
        statusCode,
        error = [],
        stack = ""

    ){

    super(messege),
    this.statusCode = statusCode,
    this.data = null,
    this.message = messege,
    this.stack = stack,
    this.error = error,
    this.success = false

    }
}

export {ApiError}
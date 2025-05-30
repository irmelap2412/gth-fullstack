export const errorHandler = (err, req, res, next) => {
  console.error("Error:", err)

  let status = err.status || 500
  let message = err.msg || err.message || "Internal Server Error"

  if (err.name === "ValidationError") {
    status = 400
    message = "Validation Error"
  }

  if (err.name === "CastError") {
    status = 400
    message = "Invalid ID format"
  }

  res.status(status).json({
    error: {
      status,
      message,
      stack: err.stack,
    },
  })
}

export const notFoundHandler = (req, res, next) => {
  const error = new Error(`Route ${req.originalUrl} not found`);
  error.status = 404;
  next(error);
}

const sendErrorResponse = (res, err) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    message,
  });
};

const sendResponse = (res, data, statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    data,
  });
};

module.exports = {
  sendErrorResponse,
  sendResponse,
};


const { sendErrorResponse } = require('../utils/response');

const errorHandler = (err, req, res, next) => {
  console.error(`[Error] ${err.message}`);
  sendErrorResponse(res, err);
};

module.exports = errorHandler;

const getAlluser = (req, res, next) => {
  try {
    res.send("Fetching all users.");
  } catch (err) {
    next(err);
  }
};

const getUserById = (req, res, next) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      const error = new Error("User ID is required");
      error.statusCode = 400;
      throw error;
    }
    res.send(`Fetching user with ID: ${userId}`);
  } catch (error) {
    next(error);
  }
};

const postUser = (req, res, next) => {
  try {
    res.send("Adding a new user.");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAlluser,
  getUserById,
  postUser,
};

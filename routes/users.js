const express = require("express");
const router = express.Router();

const getUser = require("../controllers/userController");
const getUserById = require("../controllers/userController");
const postUser = require("../controllers/userController");
router.get("/", getUser.getAlluser);

router.get("/:id", getUserById.getUserById);

router.post("/", postUser.postUser);

module.exports = router;

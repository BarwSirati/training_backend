const express = require("express");
const router = express.Router();
const {
  getUsersController,
  getUserController,
  deleteUserController,
  patchUserController,
  postUserController,
} = require("../controllers/userController");

router.get("/", getUsersController);
router.get("/:id", getUserController);
router.post("/", postUserController);
router.patch("/:id", patchUserController);
router.delete("/:id", deleteUserController);

module.exports = router;

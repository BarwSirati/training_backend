const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  const query = await User.find();
  res.status(200).send(query);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const query = await User.findOne({ _id: id });
  res.status(200).send(query);
});

router.post("/", async (req, res) => {
  const name = req.body.name;
  const lastname = req.body.lastname;
  const query = new User({ name, lastname });
  await query.save();
  res.status(201).send(query);
});

module.exports = router;

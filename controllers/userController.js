const User = require("../models/User");
const getUsersController = async (req, res) => {
  try {
    const query = await User.find();
    return res.status(200).send(query);
  } catch (err) {
    return res.status(404).send({ msg: "NOT FOUND" });
  }
};

const getUserController = async (req, res) => {
  try {
    const id = req.params.id;
    const query = await User.findById(id);
    return res.status(200).send(query);
  } catch (err) {
    return res.status(404).send({ msg: "NOT FOUND" });
  }
};

const postUserController = async (req, res) => {
  try {
    const name = req.body.name;
    const lastname = req.body.lastname;
    const query = new User({ name, lastname });
    await query.save();
    return res.status(201).send(query);
  } catch (err) {
    return res.status(404).send({ msg: "NOT FOUND" });
  }
};

const patchUserController = async (req, res) => {
  try {
    const id = req.params.id;
    const name = req.body.name;
    const query = await User.findByIdAndUpdate(id, { name: name });
    return res.status(200).send({ msg: "Success" });
  } catch (err) {
    return res.status(404).send({ msg: "NOT FOUND" });
  }
};

const deleteUserController = async (req, res) => {
  try {
    const id = req.params.id;
    const query = await User.findByIdAndDelete(id);
    return res.status(200).send(query);
  } catch (err) {
    return res.status(404).send({ msg: "NOT FOUND" });
  }
};

module.exports = {
  getUsersController,
  getUserController,
  postUserController,
  patchUserController,
  deleteUserController,
};

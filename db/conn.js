const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

exports.connect = () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    process.exit(1);
  }
};

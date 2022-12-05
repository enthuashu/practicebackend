const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  email: String,
  name: String,
  phone: String,
  address: String,
});

module.exports = mongoose.model("users", userschema);

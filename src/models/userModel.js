const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  estate: {
    type: Boolean,
    default: false,
  },
  role: {
    type: ["user", "admin"],
    default: "user",
  },
});

module.exports = mongoose.model("User", UserSchema);

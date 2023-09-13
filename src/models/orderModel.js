const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  menu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
    require: true,
  },
  state: {
    type: String,
    enum: ["pending", "in_process", "delivered"],
    default: "pending",
  },
});

module.exports = mongoose.model("Order", OrderSchema);

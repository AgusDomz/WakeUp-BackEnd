const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: date.now,
  },
  menu: {
    type: String,
    require: true,
  },
  estate: {
    type: String,
    enum: ["earring", "in_process", "delivered"],
    default: "earring",
  },
});

module.exports = mongoose.model("Order", OrderSchema);

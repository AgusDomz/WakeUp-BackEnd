const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    state: {
      type: String, // ! CONTROLAR TYPE
      enum: ["in_stock", "out_stock"],
      default: "in_stock",
    },
    price: {
      type: Number,
      require: true,
    },
    detail: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Menu", MenuSchema);

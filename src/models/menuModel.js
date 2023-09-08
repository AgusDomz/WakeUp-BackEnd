const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    estate: {
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
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Menu", MenuSchema);

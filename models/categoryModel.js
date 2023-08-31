const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  estate: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Category", CategorySchema);

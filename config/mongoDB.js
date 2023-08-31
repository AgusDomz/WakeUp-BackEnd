const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DBCONNECT);
    console.log("*** SUCCESSFUL CONNECTION ***");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = connectDB;
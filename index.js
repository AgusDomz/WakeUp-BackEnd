// DOTENV REQUIRE
require("dotenv").config();

// MORGAN REQUIRE
const morgan = require("morgan");


// EXPRESS REQUIRE
const express = require("express");

// DATABASE CONNECT
const connectDB = require("./src/config/mongoDB");
connectDB();

// OUR APP USE EXPRESS
const app = express();

app.use(express.json());
app.use(morgan("dev"));

// PORT
const port = process.env.PORT || 3000;

/**
 * Here we call the routes
 */

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

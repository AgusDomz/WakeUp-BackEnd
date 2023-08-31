// DOTENV REQUIRE
require("dotenv").config();

// EXPRESS REQUIRE
const express = require("express");

// DATABASE CONNECT
const dbConnect = require("./config/mongoDB");
dbConnect();

// OUR APP USE EXPRESS
const app = express();

app.use(express.json());

// PORT
const port = process.env.PORT || 3000;

/**
 * Here we call the routes
 */

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
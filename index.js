// DOTENV REQUIRE
require("dotenv").config();

// MORGAN REQUIRE
const morgan = require("morgan");
const authRoutes = require("./src/routes/auth.routes.js");

// COOKIE PARSER
  const cookieParser = require("cookie-parser");

// EXPRESS REQUIRE
const express = require("express");

// DATABASE CONNECT
const connectDB = require("./src/config/mongoDB");
connectDB();

// OUR APP USE EXPRESS
const app = express();

app.use(express.json()); // TODO express can read JSON
app.use(morgan("dev"));
app.use(cookieParser());

// ROUTER
app.use("/api", authRoutes);

// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

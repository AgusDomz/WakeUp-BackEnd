// EXPRESS REQUIRE
const express = require("express");
// MORGAN REQUIRE
const morgan = require("morgan");
// COOKIE PARSER
const cookieParser = require("cookie-parser");
const authRoutes = require("./src/routes/auth.routes.js");

// OUR APP USE EXPRESS
const app = express();

app.use(express.json()); // TODO express can read JSON
app.use(morgan("dev"));
app.use(cookieParser()); // TODO can read cookies

// ROUTER
app.use("/api", authRoutes);

module.exports = app;
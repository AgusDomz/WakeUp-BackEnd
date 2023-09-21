// EXPRESS REQUIRE
const express = require("express");
// MORGAN REQUIRE
const morgan = require("morgan");
// COOKIE PARSER
const cookieParser = require("cookie-parser");

const authRoutes = require("./src/routes/auth.routes.js");
const menuRoutes = require("./src/routes/menu.routes.js");
const userRoutes = require("./src/routes/user.routes.js");
const orderRoutes = require("./src/routes/order.routes.js");
const cors = require("cors");


// OUR APP USE EXPRESS
const app = express();

app.use(express.json()); // TODO express can read JSON
app.use(morgan("dev"));
app.use(cookieParser()); // TODO can read cookies
app.use(cors());

// ROUTER
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", menuRoutes);
app.use("/api", orderRoutes);

module.exports = app;

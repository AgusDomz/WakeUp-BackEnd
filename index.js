// DOTENV REQUIRE
require("dotenv").config();
// APP REQUIRE
const app = require("./app");
// DATABASE REQUIRE
const connectDB = require("./src/config/mongoDB");

// DATABASE CONNECT
connectDB();

// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

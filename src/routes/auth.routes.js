const { Router } = require("express");


const {
  register,
  login,
  logout,
  profile,
} = require("../controllers/auth.controller.users");

const authRequired = require("../middlewares/validateToken");
const isAdmin = require("../middlewares/validateIsAdmin");

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", authRequired, logout);

router.get("/profile", authRequired, profile);

module.exports = router;

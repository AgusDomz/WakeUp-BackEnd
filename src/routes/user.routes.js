const { Router } = require("express");

const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  updateUserState,
} = require("../controllers/user.controller");

const authRequired = require("../middlewares/validateToken");
const isAdmin = require("../middlewares/validateIsAdmin");

const router = Router();

router.get("/users", authRequired, isAdmin, getUsers);

router.get("/user/:id", authRequired, isAdmin, getUser);

router.post("/users", authRequired, isAdmin, createUser);

router.delete("/user/:id", authRequired, isAdmin, deleteUser);

router.put("/user/:id", authRequired, isAdmin, updateUser);

router.put("/user/update-state", authRequired, isAdmin, updateUserState);

module.exports = router;

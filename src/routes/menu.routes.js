const { Router } = require("express");
const {
  getMenus,
  createMenu,
  getMenu,
  updateMenu,
  deleteMenu,
} = require("../controllers/menu.controller");

const authRequired = require("../middlewares/validateToken");
const isAdmin = require("../middlewares/validateIsAdmin");

const router = Router();

router.get("/menus", authRequired, getMenus);

router.get("/menu/:id", authRequired, getMenu);

router.post("/menus", authRequired, isAdmin, createMenu);

router.delete("/menu/:id", authRequired, isAdmin, deleteMenu);

router.put("/menu/:id", authRequired, isAdmin, updateMenu);

module.exports = router;

const { Router } = require("express");
const {
  getMenus,
  createMenu,
  getMenu,
  updateMenu,
  deleteMenu,
  getMenuByCategory,
  updateStatusMenu,
} = require("../controllers/menu.controller");

const authRequired = require("../middlewares/validateToken");
const isAdmin = require("../middlewares/validateIsAdmin");

const router = Router();

router.get("/menus",  getMenus);

router.get("/menu/:id", authRequired, getMenu);

router.post("/createMenus",  authRequired, isAdmin, createMenu);

router.delete("/menu/:id", authRequired, isAdmin, deleteMenu);

router.put("/menu/:id", authRequired, isAdmin, updateMenu);

router.get("/menu/category/:category", authRequired, getMenuByCategory);

router.put("/menu/update-state",  updateStatusMenu);

module.exports = router;

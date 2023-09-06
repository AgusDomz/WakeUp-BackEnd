const { Router } = require("express");
const authRequired = require("../middlewares/validateToken");
const {
  getMenus,
  createMenu,
  getMenu,
  updateMenu,
  deleteMenu,
} = require("../controllers/menu.controller");

const router = Router();

router.get("/menus", authRequired, getMenus);

router.get("/menu/:id", authRequired, getMenu);

router.post("/menus", authRequired, createMenu);

router.delete("/menu/:id", authRequired, deleteMenu);

router.put("/menu/:id", authRequired, updateMenu);

module.exports = router;

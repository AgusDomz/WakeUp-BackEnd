const { Router } = require("express");

const {
  createOrder,
  updateStatusOrder,
} = require("../controllers/orders.controllers");
const isAdmin = require("../middlewares/validateIsAdmin");
const authRequired = require("../middlewares/validateToken");

const router = Router();

router.post("/orders", authRequired, createOrder);

router.put("/orders/:id", authRequired, isAdmin, updateStatusOrder);

module.exports = router;

const { Router } = require("express");

const {
  createOrder,
  updateStatusOrder,
  getAllOrders,
} = require("../controllers/orders.controllers");
const isAdmin = require("../middlewares/validateIsAdmin");
const authRequired = require("../middlewares/validateToken");

const router = Router();

router.post("/createOrders",  createOrder);

router.get("/orders",  getAllOrders);

router.put("/orders/:id",  updateStatusOrder);

module.exports = router;

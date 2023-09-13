const Order = require("../models/orderModel");
const User = require("../models/userModel");
const Menu = require("../models/menuModel");

// TODO CREATE ORDER
const createOrder = async (req, res) => {
  const { userId, menuId } = req.body;

  try {
    const user = await User.findById(userId);
    const menu = await Menu.findById(menuId);

    if (!user || !menu) {
      return res.status(400).json({ msg: "User or menú not found" });
    }

    // create order
    const order = new Order({
      user: userId,
      menu: menuId,
      estate: "pending",
    });

    await order.save();

    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Order create failed" });
  }
};

// TODO UPDATE STATUS ORDER - ONLY ADMIN
const updateStatusOrder = async (req, res) => {
  const { orderId, newStatus } = req.body;

  try {
    const updateOrder = await Order.findByIdAndUpdate(
      orderId,
      { estate: newStatus },
      { new: true }
    );

    if (!updateOrder) {
      return res.status(404).json({ msg: "Order not found" });
    }

    res.json(updateOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error updating order status" });
  }
};

module.exports = {
  createOrder,
  updateStatusOrder,
};

const Menu = require("../models/menuModel");

// TODO GET MENUS
const getMenus = async (req, res) => {
  const menus = await Menu.find();
  res.json(menus);
};

// TODO CREATE MENUS
const createMenu = async (req, res) => {
  const { name, estate, price, detail, category } = req.body;

  const newMenu = new Menu({
    name,
    estate,
    price,
    detail,
    category,
    user: req.user.id,
  });

  const saveMenu = await newMenu.save();
  res.json(saveMenu);
};

// TODO GET ONE MENU
const getMenu = async (req, res) => {
  const menu = await Menu.findById(req.params.id);
  if (!menu) return res.status(404).json({ msg: "Menú not found." });

  res.json(menu);
};

// TODO UPDATE MENU
const updateMenu = async (req, res) => {
  const menu = await Menu.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!menu) return res.status(404).json({ msg: "Menú not found." });

  res.json(menu);
};

// TODO DELETE MENU
const deleteMenu = async (req, res) => {
  const menu = await Menu.findByIdAndDelete(req.params.id);
  if (!menu) return res.status(404).json({ msg: "Menú not found." });

  res.json(menu);
};

module.exports = {
  getMenus,
  createMenu,
  getMenu,
  updateMenu,
  deleteMenu,
};

const Menu = require("../models/menuModel");

// TODO GET MENUS
const getMenus = async (req, res) => {
  const menus = await Menu.find();
  res.json(menus);
};

// TODO CREATE MENUS
const createMenu = async (req, res) => {
  const { name, state, price, detail, category } = req.body;

  const newMenu = new Menu({
    name,
    state,
    price,
    detail,
    category
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

// TODO GET MENU BY CATEGORY
const getMenuByCategory = async (req, res) => {
    try {
      const { category } = req.params;
  
      const menus = await Menu.find({ category });
  
      res.json(menus);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Error when searching menus by category" });
  }
}

// TODO UPDATE STATUS MENÚ - ONLY ADMIN
const updateStatusMenu = async (req, res) => {
  const { menuId, newStatus } = req.body;

  try { 
    const updateMenu = await Menu.findByIdAndUpdate(
      menuId,
      { state: newStatus },
      { new: true }
    );
    console.log(menuId)
    if (!updateMenu) {
      return res.status(404).json({ msg: "Menú not found" });
    }

    res.json(updateMenu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error updating menú status" });
  }
};

module.exports = {
  getMenus,
  createMenu,
  getMenu,
  updateMenu,
  deleteMenu,
  getMenuByCategory,
  updateStatusMenu,
};

const User = require("../models/userModel");

// TODO GET USERS
const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// TODO CREATE USER
const createUser = async (req, res) => {
  const { name, email, password, state, role } = req.body;

  const newUser = new User({
    name,
    email,
    password,
    state,
    role,
  });

  const saveUser = await newUser.save();
  res.json(saveUser);
};

// TODO GET ONE USER
const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ msg: "User not found." });

  res.json(user);
};

// TODO UPDATE USER
const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!user) return res.status(404).json({ msg: "User not found." });

  res.json(user);
};

// TODO DELETE USER
const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ msg: "User not found." });

  res.json(user);
};

// TODO UPDATE USER STATE
const updateUserState = async (req, res) => {
  try {
    const { userId, newState } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    user.state = newState;

    await user.save();

    res.json({ msg: "User status update successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error updating user status" });
  }
};

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  getUser,
  updateUserState,
};

const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { name, email, password, estate, role } = req.body;

  try {
    const passwordHash = await bcrypt.hash(
      password,
      Number(process.env.BCRYPT_SALTS)
    );
    const newUser = new User({
      name,
      email,
      password: passwordHash,
      estate: true,
      role,
    });

    const userSaved = await newUser.save();

    res.status(201).json({
      id: userSaved._id,
      name: userSaved.name,
      email: userSaved.email,
      createAt: userSaved.createdAt,
      updateAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ error: "Problems to register user" });
  }
};
const login = (req, res) => {
  res.send("login");
};

module.exports = { register, login };

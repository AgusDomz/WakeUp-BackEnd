const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const createAccessToken = require("../libs/jwt");

// TODO REGISTER FUNCTION
const register = async (req, res) => {
  const { name, email, role, password} = req.body;

  try {
    // entry hash encrypted
    const passwordHash = await bcrypt.hash(
      password,
      Number(process.env.BCRYPT_SALTS)
    );

    // create user
    const newUser = new User({
      name,
      email,
      password: passwordHash,
      estate: true,
      role,
    });

    // save user
    const userSaved = await newUser.save();

    const token = await createAccessToken({
      id: userSaved._id,
    });

    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      name: userSaved.name,
      email: userSaved.email,
      role: userSaved.role,
      createAt: userSaved.createdAt,
      updateAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// TODO LOGIN FUNCTION
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json({ msg: "User not found" });

    // entry hash encrypted
    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch) return res.status(400).json({ msg: "Invalid credential" });

    const token = await createAccessToken({
      id: userFound._id,
    });

    res.cookie("token", token);
    res.json({
      id: userFound._id,
      name: userFound.name,
      email: userFound.email,
      createAt: userFound.createdAt,
      updateAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// TODO LOGOUT FUNCTION
const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });

  return res.sendStatus(200);
};

// TODO PROFILE FUNCTION
const profile = async (req, res) => {
  console.log(req.user);
  const userFound = await User.findById(req.user.id);

  if (!userFound) return res.status(400).json({ msg: "User not found" });

  return res.json({
    id: userFound._id,
    name: userFound.name,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};
module.exports = { register, login, logout, profile };

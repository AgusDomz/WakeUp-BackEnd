const jwt = require("jsonwebtoken");

const isAdmin = (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied." });

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ msg: "Invalid token." });

    if (req.user.role !== "admin") {
      console.log(req.user.role);
      return res.status(403).json({ msg: "Access denied. Only admins are allowed."})
    }

    req.user = user;

    next();
  });
};

module.exports = isAdmin;
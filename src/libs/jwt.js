const jwt = require("jsonwebtoken");

function createAccessToken(user) {
  return new Promise((resolve, reject) => {
    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    jwt.sign(
      payload,
      process.env.TOKEN_SECRET,
      {
        expiresIn: "2h",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}

module.exports = createAccessToken;

const jwt = require("jsonwebtoken");

// const createAccessToken = (user) => {
//   const expToken = new Date();

//   expToken.setHours(expToken.getHours() + 3);

//   const payload = {
//     user_id: user._id,
//     iat: Date.now(),
//     exp: expToken.getTime(),
//   };

//   return jwt.sign(payload, process.env.TOKEN_SECRET)
// };

function createAccessToken (payload) {
  return new Promise ((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.TOKEN_SECRET,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) reject(err)
        resolve(token)
      }
    );
  })
}

module.exports = createAccessToken;

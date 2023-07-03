const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.headers.cookie?.split("=")[1];

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.sendStatus(403);
      }
      console.log(decoded, "decoded");
      req.user = decoded;
      next();
    });
  } else {
    return res.sendStatus(401);
  }
};

module.exports = authenticateToken;

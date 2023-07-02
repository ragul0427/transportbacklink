const jwt = require("jsonwebtoken");
const express = require('express');
const app = express();


const authenticateToken = (req, res, next) => {
  const token = req.cookies;

  console.log(token);

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.sendStatus(403);
      }
      console.log(decoded, "decoded");
      req.user = decoded;
      res.send(token);
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = authenticateToken;

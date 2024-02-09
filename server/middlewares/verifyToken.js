const jwt = require("jsonwebtoken");
require("dotenv").config();
// Define the verifyToken function
module.exports.verifyToken = (req, res, next) => {
  const authorization = req.get("Authorization");
  !authorization && res.status(400).json({ message: "Not authenticated!" });

  const token = authorization.split(" ")[1];

  let payload;
  try {
    /* Returns the payload if the signature is valid.
    If not, it will throw the error. */
    payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (error) {
    res.status(500).json(error);
  }
  req.user = payload;
  // console.log(req.user);
  next();
};

// Middleware for verifying token and authorization
module.exports.verifyTokenAndAuthorization = (req, res, next) => {
  // Call verifyToken function directly
  this.verifyToken(req, res, () => {
    if (req.user.id === req.params.userId || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!");
    }
  });
};

// Middleware for verifying token and admin
module.exports.verifyTokenAndAdmin = (req, res, next) => {
  // Call verifyToken function directly
  this.verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not admin!");
    }
  });
};

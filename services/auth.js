const jwt = require("jsonwebtoken");

let AuthService = {};

// Authorization Middleware Service that restricts parts of the app based on a user's token after login.
AuthService.restrict = (req, res, next) => {
  if (!req.headers["authorization"]) {
    return res.status(401)
    .json({error: "Please provide a valid JWT"});
  }

  const userData = jwt.verify(req.headers["authorization"], process.env.SECRET_KEY);

  if (userData) {
    req.user = userData;
    next();
  } else {
      res.status(401)
      .json({error: "Invalid JWT"});
  }
}

module.exports = AuthService;

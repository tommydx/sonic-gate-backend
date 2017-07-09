// const jwt = require("jsonwebtoken");
//
// let AuthService = {};
//
// AuthService.restrict = (req, res, next) => {
//   if (!req.headers["aithorization"]) {
//     return res.status(401)
//     .json({error: "Pleace provide a valid JWT"});
//   }
//
//   const userData = jwt.verify(req.headers["authorization"], process.env.SECRET_KEY);
//
//   if (userData) {
//     next();
//   } else {
//       res.status(401)
//       .json({error: "Invalid JWT"});
//   }
// }
//
// module.exports = AuthService;

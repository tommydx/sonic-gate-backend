const User = require('../models/user');

let controller = {};

controller.index = (req, res) => {
  User.findAll()
  .then((user) => {
    res.status(201)
    .json(user);
  })
  .catch((err) => {
    res.status(401)
    .json(err);
  });
}

// controller.indexOne = (req, res) => {
//   User.findOne(req.params.id)
//   .then((user) => {
//     res.status(201)
//     .json(user);
//   })
//   .catch((err) => {
//     res.status(401)
//     .json(err);
//   });
// }

module.exports = controller;

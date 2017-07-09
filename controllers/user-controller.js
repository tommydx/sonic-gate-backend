const express = require('express');
const router = express.Router();
const AuthService = require("../services/auth");

const User = require('../models/user');

// Used the router.route function here because I removed the index.js and combined the functionality.

// router.route('/')
//   .all(AuthService.restrict)

router.route('/')
  .get((req, res) => {
    User.findAll()
    .then((user) => {
      res.status(200)
      .json(user);
    })
    .catch((err) => {
      res.status(400)
      .json(err);
    });
  })
  .post((req, res) => {
    User.create(req.body.user)
    .then((user) => {
      res.status(201)
      .json(user);
    })
    .catch((err) => {
      res.status(400)
      .json(err);
    });
  });

router.route('/:id')
  .get((req, res) => {
  User.findOne(req.params.id)
  .then((user) => {
    res.status(201)
    .json(user);
  })
  .catch((err) => {
    res.status(401)
    .json(err);
  });
});


// Export the router here instead of the controller because the index.js file was combined in this file rather than have everything split between 2 files. See Project 3 Been There Done That for reference routing with controller and index.js

module.exports = router;

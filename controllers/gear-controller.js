const express = require('express');
const router = express.Router({mergeParams: true});
const AuthService = require("../services/auth");

const Gear = require('../models/gear');


// Used the router.route function here because I removed the index.js and combined the functionality.

// router.route('/')
//   .all(AuthService.restrict)

router.route('/')
  .get((req, res) => {
    Gear.findAll(req.params.user_id)
    .then((gear) => {
      res.status(200)
      .json(gear);
    })
    .catch((err) => {
      res.status(400)
      .json(err);
    });
  })
  .post((req, res) => {
    Gear.create(req.body.gear, req.params.user_id)
    .then((gear) => {
      res.status(201)
      .json(gear);
    })
    .catch((err) => {
      res.status(400)
      .json(err);
    });
  });

  router.route('/:id')
    .get((req, res) => {
    gear.findById(req.params.id)
    .then((gear) => {
      res.status(200)
      .json(gear);
    })
    .catch((err) => {
      res.status(400)
      .json(err);
    });
  });

  // Export the router here instead of the controller because the index.js file was combined in this file rather than have everything split between 2 files. See Project 3 Been There Done That for reference routing with controller and index.js

  module.exports = router;

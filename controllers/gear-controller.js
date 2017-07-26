const express = require('express');
const router = express.Router({mergeParams: true});
// const AuthService = require("../services/auth");

const Gear = require('../models/gear');
const User = require('../models/user');
// Used the router.route function here because I removed the index.js and combined the functionality.
// This is what the url looks like here: /users/:user_id/gear

router.route('/:gear_id')
  // .all(AuthService.restrict)
.put((req, res) => {
  console.log(req.params.gear_id);
  Gear.update(req.body.gear, req.params.gear_id)
  .then((gear) => {
    // console.log('where is my gear', gear)
    // res.sendStatus also renders on top of setting the status code so it will conflict with the .json(gear) render throwing an error even though the functionality remains in tact
    res.status(200)
    .json(gear);
  })
  .catch((err) => {
    console.log(err);
    res.status(400)
    .json(err);
  });
})
.delete((req, res) => {
  Gear.destroy(req.params.gear_id)
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    res.status(400)
    .json(err);
  });
})
.get((req, res) => {
Gear.findGearById(req.params.user_id, req.params.gear_id)
  .then((gear) => {
    res.status(200)
    .json(gear);
  })
  .catch((err) => {
    res.status(400)
    .json(err);
  });
});

// users/:id/gear
router.route('/')
  // .all(AuthService.restrict)
  .get((req, res) => {
    User.findOne(req.params.user_id)
    .then((user) => {;
      const objResp = {};
      objResp.user = user;
      // console.log('the new thing --> ', objResp)
      Gear.findAllByUserId(req.params.user_id)
      .then((gear) => {
        objResp.gear = gear;
        res.status(200)
        .json(objResp);
      })
      .catch((err) => {
        res.status(400)
        .json(err);
      });
    })
    .catch((err) => {
      res.status(401)
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

  // Export the router here instead of the controller because the index.js file was combined in this file rather than have everything split between 2 files. See Project 3 Been There Done That for reference routing with controller and index.js

  module.exports = router;

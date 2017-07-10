const request = require("supertest");

const app = require("../index");
const User = require("../models/user");

module.exports = () => {
  return new Promise((resolve, reject) => {
    User.findByEmail({
      email: "owner@fightclub.com"
    })
    .then((user) => {
      if (user) {
        return;
      } else {
        return User.create({
          fname: "Tyler",
          lname: "Durden",
          username: "sir",
          password: "donottalkaboutit",
          email: "owner@fightclub.com",
          phone_number: "555-555-5555",
          address: "1991 Paper Street",
          photo: "https://daleylife.files.wordpress.com/2013/07/tumblr_mqckwkatmg1st51fio4_500.jpg"
        })
        .then((newUser) => {
          return newUser;
        })
        .catch((err) => {
          reject(err);
        });
      }
    })
    .then(() => {
      request(app)
      .post("/users/login")
      .send({
        "user": {
          email: "owner@fightclub.com",
          password: "donottalkaboutit"
        }
      })
      .end((err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res.body.token);
      });
    })
    .catch((err) => {
      reject(err);
    });
  });
}

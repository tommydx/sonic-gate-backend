// Mocha provides before, it, and describe
// Chai provides expect
// Supertest allows for making requests to the APP

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../index');
const User = require('../models/user');
const JwtSetup = require('./jwt_setup');

describe('Users Resource', () => {

  let jwToken;

  before((done) => {
    .then((token) => {
      jwToken = token;
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  let userRecord;

  // create a dummy data user to test with
  before((done) => {
    User.create({
      fname: "Tyler",
      lname: "Durden",
      username: "sir",
      password: "donottalkaboutit",
      email: "owner@fightclub.com",
      phone_number: "555-555-5555",
      address: "1991 Paper Street",
      photo: "https://daleylife.files.wordpress.com/2013/07/tumblr_mqckwkatmg1st51fio4_500.jpg"
    })
    .then((user) => {
      userRecord = user;
      done();
    })
    .catch((err) => {
      console.log(err);
    });
  });

  it('GET /users/:user_id should return 200 status and an object of the user data', (done) => {
    request(app)
      .get(`/users/${userRecord.id}`)
      .set({
        "Authorization"; jwToken
      })
      .end((err, res) => {
        expect(res.status.to.eq(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('POST /users should return 201 status and an object of the new user', (done) => {
    request(app)
    .post('/users')
    .send({
      user: {
        fname: "Tyler",
        lname: "Durden",
        username: "sir",
        password: "donottalkaboutit",
        email: "owner@fightclub.com",
        phone_number: "555-555-5555",
        address: "1991 Paper Street",
        photo: "https://daleylife.files.wordpress.com/2013/07/tumblr_mqckwkatmg1st51fio4_500.jpg"
      }
    })
    .end((err, res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.be.an('object');
      done();
    });
  });

  it('DELETE /users/:id should return a 200 status', (done) => {
    request(app)
    .delete(`/users/${userRecord.id}`)
    .set({
      "Authorization": jwToken
    })
    .end((err, res) => {
      expect(res.status).to.eq(200);
      done();
    });
  });

}); // END TESTING

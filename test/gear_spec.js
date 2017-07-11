const expect = require('chai').expect;
const request = require('supertest');

const app = require('../index');
const Gear = require('../models/gear');
const JwtSetup = require('./jwt_setup');

describe('Gear Resource', () => {

  let jwToken;

  before((done) => {
    JwtSetup()
    .then((token) => {
      jwToken = token;
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  let gearRecord;

  before((done) => {
    Gear.create({
      name: "MetalBass",
      item_category: "Instrument",
      item: "Bass",
      manufacturer: "bassgod",
      year: "1991",
      serial_number: "1991",
      condition: "5",
      description: "unholy",
      photo_1: "na",
      photo_2: "na",
      photo_3: "na",
    }, 1)
    .then((gear) => {
      gearRecord = gear;
      done();
    })
    .catch((err) => {
      console.log(err)
    });
  });

  it('GET /gear should return 200 status and an array of gear', (done) => {
    request(app)
    .get(`/users/${gearRecord.user_id}/gear`)
    .set({
      "Authorization": jwToken
    })
    .end((err, res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('array');
      done();
    });
  });

  it('POST /gear should return 201 status and an object of the new gear item', (done) => {
    request(app)
    .post(`/users/${gearRecord.user_id}/gear`)
    .set({
      "Authorization": jwtToken
    })
    .send({
      gear: {
        name: "MetalBass",
        item_category: "Instrument",
        item: "Bass",
        manufacturer: "bassgod",
        year: "1991",
        serial_number: "1991",
        condition: "5",
        description: "unholy",
        photo_1: "na",
        photo_2: "na",
        photo_3: "na",
        user_id: 4
      }
    })
    .end((err, res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.be.an('object');
      done();
    });
  });

  it('GET /gear/:id should return a 200 status and an object with gear data', (done) => {
    request(app)
    .get(`/users/${gearRecord.user_id}/gear/${gearRecord.id}`)
    .set({
      "Authorization": jwtToken
    })
    .end((err, res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('object');
      done();
    });
  });

  it('DELETE /gear/:id should return a 200 status', (done) => {
    request(app)
    .delete(`/users/${gearRecord.user_id}/gear/${gearRecord.id}`)
    .set({
      "Authorization": jwtToken
    })
    .end((err, res) => {
      expect(res.status).to.eq(200);
      done();
    });
  });

})

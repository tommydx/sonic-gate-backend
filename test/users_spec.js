const expect = require('chai').expect;
const request = require('supertest');

const app = require('../index');
const User = require('../models/user');

// Mocha provides before, it, and describe
// Chai provides expect
// Supertest allows for making requests to the APP

// This is the User model. This will allow for the creation, search, editing, and deletion of users from the database.

const db = require('../config/database')

let User = {};

User.findAll = () => {
  return db.any(`
    SELECT * FROM users`)
}

User.findOne = (user) => {
  return db.one(`
    SELECT fname, lname, username, email, password, phone_number, address, photo
    FROM users
    WHERE id = $1
    `, [user]);
}

User.create = (user) => {

  return db.one(`
    INSERT INTO users
    (fname, lname, username, password, email, phone_number, address, photo)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING id, fname, lname, username, password, email, phone_number, address, photo
    `, [user.fname, user.lname, user.username, user.password, user.email, user.phone_number, user.address, user.photo]);
}

User.update = (user, id) => {
  return db.none(`
    UPDATE users SET
    fname = $1,
    lname = $2,
    username = $3,
    password = $4,
    email = $5,
    phone_number = $6,
    address = $7,
    photo = $8
    WHERE id = $9;
    `, [user.fname, user.lname, user.username, user.password, user.email, user.phone_number, user.address, user.photo, id]);
}

User.findByEmail = (user) => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE email = $1
    `, [user.email]);
}

User.destroy = (id) => {
  return db.none(`
    DELETE FROM users
    WHERE id = $1
    `, [id]);
}

module.exports = User;

// This is the User model. This will allow for the creation, search, editing, and deletion of users from the database.

const db = require('../config/database')

let User = {};

User.findAll = () => {
  return db.any(`
    SELECT * FROM users`)
}

User.findOne = (user) => {
  return db.one(`
    SELECT fname, lname, username, photo
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



module.exports = User;

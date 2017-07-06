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

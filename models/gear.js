// This is the Gear model. This will allow for the creation, search, editing, and deletion of users' gear records from the database.

const db = require('../config/database')

let Gear = {};

Gear.findAll = (user_id) => {
  return db.manyOrNone(`
    SELECT * FROM gear
    WHERE user_id = $1
    `, [user_id]);
}

Gear.findById = (user_id, gear_id) => {
  return db.oneOrNone(`
    SELECT * FROM gear
    WHERE user_id = $1
    AND id = $2
    `, [user_id, gear_id]);
}

module.exports = Gear;

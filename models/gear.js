// This is the Gear model. This will allow for the creation, search, editing, and deletion of users' gear from the database.

const db = require('../config/database')

let Gear = {};

Gear.findAll = (user_id) => {
  return db.manyOrNone(`
    SELECT * FROM gear
    WHERE user_id = $1
    `, [user_id]);
}

Gear.create = (gear, user_id) => {
  return db.one(`
    INSERT INTO gear
    (name, item_category, item, manufacturer, year,
    serial_number, condition, description, photo_1, photo_2, photo_3, user_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    RETURNING * `,
    [gear.name, gear.item_category, gear.item, gear.manufacturer, gear.year, gear.serial_number, gear.condition, gear.description, gear.photo_1, gear.photo_2, gear.photo_3, user_id
    ]);
}

Gear.findById = (user_id, gear_id) => {
  return db.oneOrNone(`
    SELECT * FROM gear
    WHERE user_id = $1
    AND id = $2
    `, [user_id, gear_id]);
}

module.exports = Gear;

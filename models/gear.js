// This is the Gear model. This will allow for the creation, search, editing, and deletion of users' gear from the database.

const db = require('../config/database')

let Gear = {};

Gear.findAllByUserId = (user_id) => {
  return db.manyOrNone(`
    SELECT * FROM gear
    WHERE user_id = $1
    `, [user_id]);
}

Gear.findGearById = (user_id, gear_id) => {
  return db.oneOrNone(`
    SELECT * FROM gear
    WHERE user_id = $1
    AND id = $2
    `, [user_id, gear_id]);
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

Gear.update = (gear, id) => {
  //  console.log('inside Gear update', gear, id)
  return db.one(`
    UPDATE gear SET
    name = $1,
    item_category = $2,
    item = $3,
    manufacturer = $4,
    year = $5,
    serial_number $6,
    condition = $7,
    description = $8,
    photo_1 = $9,
    photo_2 = $10,
    photo_3 = $11
    WHERE id = $12;
    `, [gear.name, gear.item_category, gear.item, gear.manufacturer, gear.year, gear.serial_number, gear.condition, gear.description, gear.photo_1, gear.photo_2, gear.photo_3, id
    ]);
}

Gear.destroy = (id) => {
  return db.none(`
    DELETE FROM gear
    WHERE id = $1
    `, [id]);
}


module.exports = Gear;

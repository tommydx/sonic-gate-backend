-- This is the seeds file to populate the database with test data for production.

INSERT INTO users (
  fname,
  lname,
  username,
  password,
  email,
  phone_number,
  address,
  photo
) VALUES
('Tom', 'Docu', 'VRG', '1991', 'tommydx@gmail.com', '', '666, nowhere', '');

INSERT INTO gear (
  name,
  item_category,
  item,
  manufacturer,
  year,
  serial_number,
  condition,
  description,
  photo_1,
  photo_2,
  photo_3,
  user_id
) VALUES
('Favorite Axe', 'Instrument', 'Guitar', 'ESP', '2014', '0000IDONTKNOW', '4', 'Excellent guitar. Love the action. Cool body design and color. Sounds great. Has EMG pickups and a Floyd Rose setup.', 'pic1', 'pic2', 'pic3', 1);

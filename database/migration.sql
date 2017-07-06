-- This is the database migration file. It will create the database with the coded tables below, and destroy any pre-exisiting conflicts.

DROP DATABASE IF EXISTS sonic_gate_db;
CREATE DATABASE sonic_gate_db;

\c sonic_gate_db

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  fname VARCHAR(60) NOT NULL,
  lname VARCHAR(60) NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(30),
  address VARCHAR(255),
  photo VARCHAR(255)
);

DROP TABLE IF EXISTS gear;

CREATE TABLE gear (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),
  item_category VARCHAR(255) NOT NULL,
  item VARCHAR(255) NOT NULL,
  manufacturer VARCHAR(255) NOT NULL,
  year INTEGER NOT NULL,
  serial_number VARCHAR(255) NOT NULL,
  condition VARCHAR(255),
  description TEXT,
  photo_1 VARCHAR(255),
  photo_2 VARCHAR(255),
  photo_3 VARCHAR(255),
  user_id INT REFERENCES users(id)
);

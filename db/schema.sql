DROP DATABASE IF EXISTS gyms_db;

CREATE database gyms_db;

USE gyms_db;

CREATE TABLE gyms (
  id INTEGER NOT NULL AUTO_INCREMENT,
  gym_name VARCHAR(30),
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);
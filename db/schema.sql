DROP DATABASE IF EXISTS gyms_db;

create database gyms_db;

USE gyms_db;

create TABLE gyms (
  id INTEGER NOT NULL AUTO_INCREMENT,
  gym_name VARCHAR(30),
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
  );
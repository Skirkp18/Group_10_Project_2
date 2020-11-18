CREATE DATABASE user_db;

USE user_db;

CREATE TABLE `user_info` (
  `id` int(11) NOT NULL,
  `firstName` varchar(20) NOT NULL,
   `lastName` varchar(20) NOT NULL,
  `email` varchar(30) DEFAULT NULL, 
  `password` varchar(10) NOT NULL,
  `zipcode` int(5) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `user_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=1,
  ADD COLUMN `gym` varchar(50) NOT NULL,
  ADD COLUMN `county` varchar(50) NOT NULL
  ;
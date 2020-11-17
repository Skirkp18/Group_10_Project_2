CREATE TABLE `user_db` (
  `id` int(11) NOT NULL,
  `firstname` varchar(20) NOT NULL,
   `lastname` varchar(20) NOT NULL,
  `email` varchar(30) DEFAULT NULL, 
  `password` varchar(10) NOT NULL,
  `zipcode` int(5) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
ALTER TABLE `user_db`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `user_db`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=1;
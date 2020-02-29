CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int AUTO_INCREMENT,
	burger varchar(100),
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
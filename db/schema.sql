CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger varchar(100) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
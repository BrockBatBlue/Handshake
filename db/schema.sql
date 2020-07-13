### Schema

CREATE DATABASE service_db;
USE service_db;

CREATE TABLE services
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	sleepy BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

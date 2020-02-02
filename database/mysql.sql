create database crud;

use crud;

create table customer(
    id int(10) UNSIGNED auto_increment primary key,
    name varchar(50) not null,
    address varchar(50) not null,
    phone varchar(11)
);

show tables;
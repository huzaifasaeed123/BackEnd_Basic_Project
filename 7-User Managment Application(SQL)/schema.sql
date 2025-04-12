create table user(
    id varchar(100) primary key,
    username varchar(50) unique,
    email varchar(100) unique not null,
    password varchar(100) not null
);
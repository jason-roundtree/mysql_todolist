create database mysql_todolist;
use mysql_todolist;
create table todos (
    id int not null auto_increment,
    description varchar(255) not null,
    completed boolean default false,
    primary key (id)
);


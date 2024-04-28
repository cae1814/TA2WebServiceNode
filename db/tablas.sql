-- Active: 1698945600332@@127.0.0.1@5432@postgres@public

create table tbl_animal 
(
    id serial PRIMARY KEY,
    nombre varchar(250), 
    sonido varchar(20)
);


select * from tbl_animal;
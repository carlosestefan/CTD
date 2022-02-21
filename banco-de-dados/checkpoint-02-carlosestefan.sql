create database steamy;

use steamy;

drop table if exists produtora;
create table produtora
(
id int auto_increment primary key,
nome varchar(100)
);

drop table if exists genero;
create table genero
(
id int auto_increment primary key,
nome varchar(100)
);

drop table if exists sistema;
create table sistema
(
id int auto_increment primary key,
nome varchar(100)
);

drop table if exists jogo;
create table jogo
(
id int auto_increment primary key,
titulo varchar(100),
ano date,
preco double,
idprodutora int,
idgenero int,
idsistema int,
constraint fk_produtora foreign key (idprodutora) references produtora(id),
constraint fk_genero foreign key (idgenero) references genero(id),
constraint fk_sistema foreign key (idsistema) references sistema(id)
);

drop table if exists usuario;
create table usuario
(
id int auto_increment primary key,
username varchar(100),
nome varchar(45),
sobrenome varchar(100),
email varchar(50),
senha varchar(50),
data_nasc date
);

drop table if exists compra;
create table compra
(
id int auto_increment primary key,
data date,
idusuario int,
idjogo int,
constraint fk_usuario foreign key (idusuario) references usuario(id),
constraint fk_jogo foreign key (idjogo) references jogo(id)
);

insert into jogo (titulo, ano, preco) values ('God of War', 20180420, 249.90);
insert into jogo (titulo, ano, preco) values ('Uncharted 4', 20160510, 249.9);

update jogo set preco = 149.90 where preco = 249.90;

delete from jogo where titulo = 'God of War';

select * from jogo;





create database spotify;

use spotify;

drop table if exists usuario;
create table usuario
(
id int auto_increment primary key,
nomeusuario varchar(45),
data_nac date,
sexo varchar(1),
email varchar(150),
senha varchar(45),
status tinyint
);

drop table if exists artista;
create table artista
(
id int auto_increment primary key,
nome varchar(45),
sobrenome varchar(100)
);

create table genero
(
id int auto_increment primary key,
genero varchar(45)
);

drop table if exists generocancao;
create table generocancao
(
id int auto_increment primary key,
idcancoes int(11),
idgenero int(11),
constraint fk_cancoes foreign key (idcancoes) references cancoes (id),
constraint fk_genero foreign key (idgenero) references genero (id)
);

create table album
(
id int auto_increment primary key,
titulo varchar(45),
ano date,
idartista int(11),
constraint fk_artista foreign key (idartista) references artista (id)
);

create table cancoes
(
id int auto_increment primary key,
titulo varchar(45),
ano date,
duracao double,
qtdreproducao int(11),
qtdlikes int(11),
idalbum int(11),
constraint fk_album foreign key (idalbum) references album (id)
);

create table playlist
(
id int auto_increment primary key,
titulo varchar(45),
qtdcancoes int(11),
datacriacao datetime,
idusuario int(11),
constraint fk_usuario foreign key (idusuario) references usuario (id)
);

create table playlist_cancao
(
id int auto_increment primary key,
idcancao int(11),
idplaylist int(11),
constraint fk_cancao foreign key (idcancao) references cancoes (id),
constraint fk_playlist foreign key (idplaylist) references playlist (id)
);


SELECT * FROM spotify.cancoes;
insert into cancoes (id, titulo, ano) values (1, 'Another Brick in the Wall', '1981-07-01');
delete from cancoes;



create database dhtube;

use dhtube;


drop table if exists avatar;
create table avatar
(
id int auto_increment primary key,
nome varchar(45),
urlImagem varchar(100)
);

drop table if exists pais;
create table pais
(
id int auto_increment primary key,
nome varchar(100)
);

drop table if exists usuario;
create table usuario
(
id int auto_increment primary key,
nome varchar(45),
email varchar(45),
senha varchar(45),
dataNascimento date,
cep varchar(45),
idPais int,
idAvatar int,
constraint fk_pais foreign key (idPais) references pais (id),
constraint fk_avatar foreign key (idAvatar) references avatar (id)
);

drop table if exists canal;
create table canal
(
id int auto_increment primary key,
nome varchar(45),
descricao text,
dataCriacao datetime,
idUsuario int,
constraint fk_usuario foreign key (idUsuario) references usuario (id)
);

drop table if exists playlist;
create table playlist
(
id int auto_increment primary key,
nome varchar(45),
dataCriacao datetime,
privado smallint,
idUsuario int,
constraint fk_usuario2 foreign key (idUsuario) references usuario (id)
);

drop table if exists playlist_video;
create table playlist_video
(
idVideo int,
idPlaylist int,
constraint fk_video foreign key (idVideo) references video (id),
constraint fk_playlist foreign key (idPlaylist) references playlist (id)
);

drop table if exists video;
create table video
(
id int auto_increment primary key,
titulo varchar(100),
descricao text,
tamanho double,
nomeArquivo varchar(100),
duracao double,
imagem varchar(100),
qtdReproducoes int,
qtdLikes int,
qtdDislikes int,
privado smallint,
dataPublicacao datetime
);
USE saude_dh;

DROP TABLE IF EXISTS pacientes;
CREATE TABLE pacientes
(
id 			int auto_increment PRIMARY key,
id_saude 	int,
nome 		varchar(50),
sobrenome 	varchar(100)
);

DROP TABLE IF EXISTS especialidades;
CREATE TABLE especialidades
(
id		int auto_increment PRIMARY KEY,
nome 	varchar(100)
);

DROP TABLE IF EXISTS medicos;
CREATE TABLE medicos
(
id					int auto_increment primary key,
nome 				varchar(50),
sobrenome			varchar(100),
idEspecialidade 	int,
CONSTRAINT 			FK_especialidades # nome estrangeira
foreign key			(idEspecialidade) # nome atributo que vai receber a chave
REFERENCES			especialidades (id) # especialidades = Tabela que utilizo a chave | (id) = Atributo PK da tabela especialidades
);


SELECT * FROM especialidades;

INSERT INTO especialidades
(
NOME
)
VALUES('TESTE'), ('TESTE 2');


DROP TABLE IF EXISTS consultas;
CREATE TABLE consultas
(
id int auto_increment primary key,
idPaciente int,
idMedico int,
dataConsulta date,
horaConsulta time,
constraint fk_paciente foreign key (idPaciente) references pacientes (id),
constraint fk_medico foreign key (idMedico) references medicos (id)
);

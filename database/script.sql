create table autores (
	id serial primary key,
	nome varchar(100) not null
);

create table livros (
	id serial primary key,
	nome varchar(100) not null,
	autor_id integer references autores(id),
	data_lancamento date default current_date
);

create table clientes (
	id serial primary key,
	nome varchar(100) not null,
	email varchar(120) unique
);

create table emprestimos (
	id serial primary key,
	cliente_id integer references clientes(id),
	livro_id integer references livros(id),
	data_emprestimo date default current_date,
	data_vencimento date default current_date + 30 --leve ajuda de i.a, estava colocando (+ '30 days')
);


-- inserção de dados básicos (i.a)

INSERT INTO autores (nome)
VALUES
    ('Machado de Assis'),
    ('J. K. Rowling'),
    ('George Orwell'),
    ('Rick Riordan');

INSERT INTO livros (nome, autor_id, data_lancamento)
VALUES
    ('Dom Casmurro', 1, '1899-01-01'),
    ('Harry Potter e a Pedra Filosofal', 2, '1997-06-26'),
    ('1984', 3, '1949-06-08'),
    ('Percy Jackson e o Ladrão de Raios', 4, '2005-06-28');

INSERT INTO clientes (nome, email)
VALUES
    ('Gabriel Silva', 'gabriel@gmail.com'),
    ('Emilly Vitória', 'emyv@gmail.com'),
    ('Lucas Oliveira', 'lucas@gmail.com'),
    ('Oswaldo Rocha', 'oswaldo@gmail.com');

INSERT INTO emprestimos (cliente_id, livro_id, data_emprestimo)
VALUES
    (1, 1, '2026-10-01'),
    (2, 2, '2026-10-05'),
    (3, 4, '2026-10-10'),
    (4, 3, '2026-10-15');
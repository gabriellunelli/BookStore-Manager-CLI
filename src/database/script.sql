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

-- Consultas relacionais

-- livros emprestados
select c.nome, l.nome, e.data_emprestimo from livros as l
inner join emprestimos as e on l.id = e.livro_id
inner join clientes as c on e.cliente_id = c.id
order by c.nome

-- quantidade de empréstimos por livro
select l.nome, count(e.livro_id) from emprestimos as e
inner join livros as l on l.id = e.livro_id
group by l.nome
order by l.nome

insert into clientes (nome, email)
values ('Robert Rocha', 'rr.robert@gmail.com')
-- clientes com empréstimos ativos
select c.nome as clientes_ativos from clientes as c
inner join emprestimos as e on c.id = e.cliente_id
order by c.nome
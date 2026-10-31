import { Emprestimo } from "../models/EmprestimoModel";
import { Cliente } from "../models/ClientesModel";
import { Autor } from "../models/AutorModel";
import { Livro } from "../models/LivroModel";

export const EMPRESTIMOS_INICIAIS:Emprestimo[] = [
    {cliente_id:1, livro_id:1, quantidade:1,data_emprestimo:'2026-10-01'},
    {cliente_id:2, livro_id:2, quantidade:1,data_emprestimo:'2026-10-05'},
    {cliente_id:3, livro_id:4, quantidade:2,data_emprestimo:'2026-10-10'},
    {cliente_id:4, livro_id:3, quantidade:1,data_emprestimo:'2026-10-15'}
]

export const CLIENTES_INICIAIS:Cliente[] = [
    {id:1, nome:'Gabriel Silva', email:'gabriel@gmail.com'},
    {id:2, nome:'Emilly Vitória', email:'emyv@gmail.com'},
    {id:3, nome:'Lucas Oliveira', email:'lucas@gmail.com'},
    {id:4, nome:'Oswaldo Rocha', email:'oswaldo@gmail.com'}]

export const AUTORES_INICIAIS:Autor[] = [
    {id:1, nome:'Machado de Assis'},
    {id:2, nome:'J. K. Rowling'},
    {id:3, nome:'George Orwell'},
    {id:4, nome:'Rick Riordan'}
]

export const LIVROS_INICIAIS:Livro[] = [
    {id:1, nome:'Dom Casmurro', autor_id:1, data_lancamento:'1899-01-01', estoque: 4},
    {id:2, nome:'Harry Potter e a Pedra Filosofal', autor_id:2, data_lancamento:'1997-06-26', estoque:3},
    {id:3, nome:'1984', autor_id:3, data_lancamento:'1949-06-08', estoque:2},
    {id:4, nome:'Percy Jackson e o Ladrão de Raios', autor_id:4, data_lancamento:'2005-06-28', estoque:3}
]
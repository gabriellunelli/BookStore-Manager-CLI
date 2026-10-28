import { Emprestimo } from "../models/EmprestimoModel";
import { Cliente } from "../models/ClientesModel";
import { Autor } from "../models/AutorModel";

export const EMPRESTIMOS:Emprestimo[] = [{cliente_id:1, livro_id:1, data_emprestimo:'2026-10-01'},{cliente_id:2, livro_id:2, data_emprestimo:'2026-10-05'},{cliente_id:3, livro_id:4, data_emprestimo:'2026-10-10'},{cliente_id:4, livro_id:3, data_emprestimo:'2026-10-15'}]

export const CLIENTES:Cliente[] = [
    {id:1, nome:'Gabriel Silva', email:'gabriel@gmail.com'},
    {id:2, nome:'Emilly Vitória', email:'emyv@gmail.com'},
    {id:3, nome:'Lucas Oliveira', email:'lucas@gmail.com'},
    {id:4, nome:'Oswaldo Rocha', email:'oswaldo@gmail.com'}]

export const AUTORES:Autor[] = [
    {id:1, nome:'Machado de Assis'},
    {id:2, nome:'J. K. Rowling'},
    {id:3, nome:'George Orwell'},
    {id:4, nome:'Rick Riordan'}
]
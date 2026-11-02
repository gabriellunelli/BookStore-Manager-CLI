import { Autor } from "../models/AutorModel";
import { Cliente } from "../models/ClientesModel";
import { Livro } from "../models/LivroModel";
import { atualizarAutor, cadastrarAutor, consultarAutorEspecifico, listarAutores, removerAutor } from "../repositories/AutorRepository";
import { atualizarCliente, cadastrarCliente, consultarClienteEspecifico, listarClientes, removerCliente } from "../repositories/ClienteRepository";
import { realizarDevolucao, realizarEmprestimo } from "../repositories/EmprestimoRepository";
import { atualizarLivro, cadastrarLivro, consultarLivroEspecifico, listarLivros, removerLivro } from "../repositories/LivroRepository";
import { aviso, erro } from "./formatarTexto";

export function verificarRespostaCliente(resposta:string){
    if (resposta === '1') {
        listarClientes()
    } else if (resposta === '2'){
        let resposta = Number(prompt('Informe o id do cliente: '))
        while (resposta === null) {
            resposta = Number(prompt('Informe o id do cliente: '))
        }

        consultarClienteEspecifico(resposta)

    } else if (resposta === '3'){
        let id = Number(prompt('Informe o id do cliente: '))
        while (id === null) {
            id = Number(prompt('Informe o id do cliente: '))
        }

        let nome = prompt('Digite o nome do cliente: ')
        while (nome === null) {
          nome = prompt('Digite o nome do cliente: ')  
        }

        let email = prompt('Digite o e-mail do cliente: ')
        while (email === null) {
            email = prompt('Digite o e-mail do cliente: ')
        }

        const cliente:Cliente = {id:id, nome:nome, email:email}

        cadastrarCliente(cliente)
    } else if (resposta ==='4'){
        let id = Number(prompt('Informe o id do cliente: '))
        while (id === null) {
            id = Number(prompt('Informe o id do cliente: '))
        }

        atualizarCliente(id)
    } else if (resposta ==='5'){
        let id = Number(prompt('Informe o id do cliente: '))
        while (id === null) {
            id = Number(prompt('Informe o id do cliente: '))
        }

        removerCliente(id)
    } else {
        erro('O valor informado é inválido.')
    }
}

export function verificarRespostaAutor(resposta:string){
    if (resposta === '1') {
        listarAutores()
    } else if (resposta === '2'){
        let resposta = Number(prompt('Informe o id do autor: '))
        while (resposta === null) {
            resposta = Number(prompt('Informe o id do autor: '))
        }
        
        consultarAutorEspecifico(resposta)

    } else if (resposta === '3'){
        let id = Number(prompt('Informe o id do autor: '))
        while (id === null) {
            id = Number(prompt('Informe o id do autor: '))
        }

        let nome = prompt('Digite o nome do autor: ')
        while (nome === null) {
          nome = prompt('Digite o nome do autor: ')  
        }

        const autor:Autor = {id:id, nome:nome}

        cadastrarAutor(autor)
    } else if (resposta ==='4'){
        let id = Number(prompt('Informe o id do autor: '))
        while (id === null) {
            id = Number(prompt('Informe o id do autor: '))
        }

        atualizarAutor(id)
    } else if (resposta ==='5'){
        let id = Number(prompt('Informe o id do autor: '))
        while (id === null) {
            id = Number(prompt('Informe o id do autor: '))
        }

        removerAutor(id)
    } else {
        erro('O valor informado é inválido.')
    }
}

export function verificarRespostaLivro(resposta:string){
    if (resposta === '1') {
        listarLivros()
    } else if (resposta === '2'){
        let resposta = Number(prompt('Informe o id do livro: '))
        while (resposta === null) {
            resposta = Number(prompt('Informe o id do livro: '))
        }
        
        consultarLivroEspecifico(resposta)

    } else if (resposta === '3'){
        let id = Number(prompt('Informe o id do livro: '))
        while (id === null) {
            id = Number(prompt('Informe o id do livro: '))
        }

        let nome = prompt('Digite o nome do livro: ')
        while (nome === null) {
          nome = prompt('Digite o nome do livro: ')  
        }

        let autor_id = Number(prompt('Digite o id do autor: '))
        while (autor_id === null) {
            autor_id = Number(prompt('Digite o id do autor: '))
        }
        
        let data_lancamento = prompt('Digite a data de lançamento: ')
        while (data_lancamento === null) {
            data_lancamento = prompt('Digite a data de lançamento: ')
        }

        let estoque = Number(prompt('Digite o estoque do livro: '))
        while (estoque === null) {
            estoque = Number(prompt('Digite o estoque do livro: '))
        }

        const livro:Livro = {id:id, nome:nome, autor_id:autor_id, data_lancamento:data_lancamento, estoque:estoque}

        cadastrarLivro(livro)
    } else if (resposta ==='4'){
        let id = Number(prompt('Informe o id do livro: '))
        while (id === null) {
            id = Number(prompt('Informe o id do livro: '))
        }

        atualizarLivro(id)
    } else if (resposta ==='5'){
        let id = Number(prompt('Informe o id do livro: '))
        while (id === null) {
            id = Number(prompt('Informe o id do livro: '))
        }

        removerLivro(id)
    } else {
        erro('O valor informado é inválido.')
    }
}

export function verificarRespostaEmprestimo(resposta:string){
    if (resposta === '1') {
        let cliente_id = Number(prompt('Informe o id do cliente: '))
        while (cliente_id === null) {
            cliente_id = Number(prompt('Informe o id do cliente: '))
        }

        let livro_id = Number(prompt('Informe o id do livro: '))
        while (livro_id === null) {
            livro_id = Number(prompt('Informe o id do livro: '))
        }

        realizarEmprestimo(cliente_id, livro_id)
    } else if (resposta === '2'){
        let cliente_id = Number(prompt('Informe o id do cliente: '))
        while (cliente_id === null) {
            cliente_id = Number(prompt('Informe o id do cliente: '))
        }

        let livro_id = Number(prompt('Informe o id do livro: '))
        while (livro_id === null) {
            livro_id = Number(prompt('Informe o id do livro: '))
        }

        realizarDevolucao(cliente_id, livro_id)
    } else {
        erro('O valor informado é inválido.')
    }
}
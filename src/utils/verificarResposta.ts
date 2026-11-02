import { Autor } from "../models/AutorModel"
import { Cliente } from "../models/ClientesModel"
import { Livro } from "../models/LivroModel"
import { atualizarAutor, cadastrarAutor, consultarAutorEspecifico, listarAutores, removerAutor } from "../repositories/AutorRepository"
import { atualizarCliente, cadastrarCliente, consultarClienteEspecifico, listarClientes, removerCliente } from "../repositories/ClienteRepository"
import { realizarDevolucao, realizarEmprestimo } from "../repositories/EmprestimoRepository"
import { atualizarLivro, cadastrarLivro, consultarLivroEspecifico, listarLivros, removerLivro } from "../repositories/LivroRepository"
import { erro } from "./formatarTexto"
import { perguntarData, perguntarInteiro, perguntarTexto } from "./entrada"

export async function verificarRespostaCliente(resposta: string): Promise<void> {
    if (resposta === "1") {
        listarClientes()
    } else if (resposta === "2") {
        const id = await perguntarInteiro("Informe o ID do cliente: ")
        if (id !== null) consultarClienteEspecifico(id)
    } else if (resposta === "3") {
        const id = await perguntarInteiro("Informe o ID do cliente: ")
        if (id === null) return

        const nome = await perguntarTexto("Digite o nome do cliente: ")
        if (nome === null) return

        const email = await perguntarTexto("Digite o e-mail do cliente: ")
        if (email === null) return

        const cliente: Cliente = { id, nome, email }
        cadastrarCliente(cliente)
    } else if (resposta === "4") {
        const id = await perguntarInteiro("Informe o ID do cliente: ")
        if (id !== null) await atualizarCliente(id)
    } else if (resposta === "5") {
        const id = await perguntarInteiro("Informe o ID do cliente: ")
        if (id !== null) removerCliente(id)
    } else {
        erro("O valor informado é inválido.")
    }
}

export async function verificarRespostaAutor(resposta: string): Promise<void> {
    if (resposta === "1") {
        listarAutores()
    } else if (resposta === "2") {
        const id = await perguntarInteiro("Informe o ID do autor: ")
        if (id !== null) consultarAutorEspecifico(id)
    } else if (resposta === "3") {
        const id = await perguntarInteiro("Informe o ID do autor: ")
        if (id === null) return

        const nome = await perguntarTexto("Digite o nome do autor: ")
        if (nome === null) return

        const autor: Autor = { id, nome }
        cadastrarAutor(autor)
    } else if (resposta === "4") {
        const id = await perguntarInteiro("Informe o ID do autor: ")
        if (id !== null) await atualizarAutor(id)
    } else if (resposta === "5") {
        const id = await perguntarInteiro("Informe o ID do autor: ")
        if (id !== null) removerAutor(id)
    } else {
        erro("O valor informado é inválido.")
    }
}

export async function verificarRespostaLivro(resposta: string): Promise<void> {
    if (resposta === "1") {
        listarLivros()
    } else if (resposta === "2") {
        const id = await perguntarInteiro("Informe o ID do livro: ")
        if (id !== null) consultarLivroEspecifico(id)
    } else if (resposta === "3") {
        const id = await perguntarInteiro("Informe o ID do livro: ")
        if (id === null) return

        const nome = await perguntarTexto("Digite o nome do livro: ")
        if (nome === null) return

        const autorId = await perguntarInteiro("Digite o ID do autor: ")
        if (autorId === null) return

        const dataLancamento = await perguntarData("Digite a data de lançamento (AAAA-MM-DD): ")
        if (dataLancamento === null) return

        const estoque = await perguntarInteiro("Digite o estoque do livro: ", 0)
        if (estoque === null) return

        const livro: Livro = {
            id,
            nome,
            autor_id: autorId,
            data_lancamento: dataLancamento,
            estoque
        }
        cadastrarLivro(livro)
    } else if (resposta === "4") {
        const id = await perguntarInteiro("Informe o ID do livro: ")
        if (id !== null) await atualizarLivro(id)
    } else if (resposta === "5") {
        const id = await perguntarInteiro("Informe o ID do livro: ")
        if (id !== null) removerLivro(id)
    } else {
        erro("O valor informado é inválido.")
    }
}

export async function verificarRespostaEmprestimo(resposta: string): Promise<void> {
    if (resposta === "1" || resposta === "2") {
        const clienteId = await perguntarInteiro("Informe o ID do cliente: ")
        if (clienteId === null) return

        const livroId = await perguntarInteiro("Informe o ID do livro: ")
        if (livroId === null) return

        if (resposta === "1") {
            await realizarEmprestimo(clienteId, livroId)
        } else {
            realizarDevolucao(clienteId, livroId)
        }
    } else {
        erro("O valor informado é inválido.")
    }
}

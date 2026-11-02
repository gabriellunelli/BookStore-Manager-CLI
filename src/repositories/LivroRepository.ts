import { LIVROS_INICIAIS } from "../data/seed"
import { AUTORES, EMPRESTIMOS, LIVROS } from "../data/store"
import { Livro } from "../models/LivroModel"
import { perguntarData, perguntarInteiro, perguntarTexto } from "../utils/entrada"
import { verificar } from "../utils/verificarVazio"

export { LIVROS }

export function carregarLivrosIniciais(): void {
    LIVROS.splice(0, LIVROS.length, ...LIVROS_INICIAIS.map(livro => ({ ...livro })))
}

export function cadastrarLivro(livro: Livro): boolean {
    if (!Number.isSafeInteger(livro.id) || livro.id < 1 || !livro.nome.trim()) {
        console.log("Não foi possível cadastrar: informe um ID e um nome válidos.")
        return false
    }

    if (LIVROS.some(livroCadastrado => livroCadastrado.id === livro.id)) {
        console.log("Já existe um livro com esse ID.")
        return false
    }

    if (!AUTORES.some(autor => autor.id === livro.autor_id)) {
        console.log("O autor informado não existe.")
        return false
    }

    if (!Number.isSafeInteger(livro.estoque) || livro.estoque < 0) {
        console.log("O estoque deve ser um número inteiro igual ou maior que zero.")
        return false
    }

    LIVROS.push({ ...livro, nome: livro.nome.trim() })
    return true
}

export function listarLivros(): void {
    console.log(LIVROS)
}

export function consultarLivroEspecifico(id: number): Livro | null {
    const livro = LIVROS.find(item => item.id === id)
    if (!verificar(livro)) {
        return null
    }

    console.log(livro)
    return livro
}

export async function atualizarLivro(id: number): Promise<boolean> {
    const livro = LIVROS.find(item => item.id === id)
    if (!verificar(livro)) {
        return false
    }

    const novoNome = await perguntarTexto("Informe o novo nome do livro: ")
    if (novoNome === null) return false

    const novoAutorId = await perguntarInteiro("Informe o novo ID do autor: ")
    if (novoAutorId === null) return false
    if (!AUTORES.some(autor => autor.id === novoAutorId)) {
        console.log("O autor informado não existe.")
        return false
    }

    const novaDataLancamento = await perguntarData("Informe a nova data de lançamento (AAAA-MM-DD): ")
    if (novaDataLancamento === null) return false

    livro.nome = novoNome
    livro.autor_id = novoAutorId
    livro.data_lancamento = novaDataLancamento
    return true
}

export function removerLivro(id: number): boolean {
    const indice = LIVROS.findIndex(item => item.id === id)
    if (indice === -1) {
        console.log("O ID informado não retorna nenhum livro.")
        return false
    }

    if (EMPRESTIMOS.some(emprestimo => emprestimo.livro_id === id)) {
        console.log("Não é possível remover um livro que possui empréstimos cadastrados.")
        return false
    }

    LIVROS.splice(indice, 1)
    return true
}

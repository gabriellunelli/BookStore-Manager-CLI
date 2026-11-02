import { AUTORES_INICIAIS } from "../data/seed"
import { AUTORES, LIVROS } from "../data/store"
import { Autor } from "../models/AutorModel"
import { perguntarInteiro, perguntarTexto } from "../utils/entrada"
import { verificar } from "../utils/verificarVazio"

export { AUTORES }

export function carregarAutoresIniciais(): void {
    AUTORES.splice(0, AUTORES.length, ...AUTORES_INICIAIS.map(autor => ({ ...autor })))
}

export function cadastrarAutor(autor: Autor): boolean {
    if (!Number.isSafeInteger(autor.id) || autor.id < 1 || !autor.nome.trim()) {
        console.log("Não foi possível cadastrar: informe um ID e um nome válidos.")
        return false
    }

    if (AUTORES.some(autorCadastrado => autorCadastrado.id === autor.id)) {
        console.log("Já existe um autor com esse ID.")
        return false
    }

    AUTORES.push({ ...autor, nome: autor.nome.trim() })
    return true
}

export function listarAutores(): void {
    console.log(AUTORES)
}

export function consultarAutorEspecifico(autorId: number): Autor | null {
    const autor = AUTORES.find(item => item.id === autorId)
    if (!verificar(autor)) {
        return null
    }

    console.log(autor)
    return autor
}

export async function atualizarAutor(autorId: number): Promise<boolean> {
    const autor = AUTORES.find(item => item.id === autorId)
    if (!verificar(autor)) {
        return false
    }

    const novoId = await perguntarInteiro("Informe o novo ID do autor: ")
    if (novoId === null) return false

    if (novoId !== autorId && AUTORES.some(item => item.id === novoId)) {
        console.log("Já existe um autor com esse ID.")
        return false
    }

    const novoNome = await perguntarTexto("Informe o novo nome do autor: ")
    if (novoNome === null) return false

    autor.id = novoId
    autor.nome = novoNome
    for (const livro of LIVROS) {
        if (livro.autor_id === autorId) {
            livro.autor_id = novoId
        }
    }

    return true
}

export function removerAutor(autorId: number): boolean {
    const indice = AUTORES.findIndex(item => item.id === autorId)
    if (indice === -1) {
        console.log("O ID informado não retorna nenhum autor.")
        return false
    }

    if (LIVROS.some(livro => livro.autor_id === autorId)) {
        console.log("Não é possível remover um autor que possui livros cadastrados.")
        return false
    }

    AUTORES.splice(indice, 1)
    return true
}

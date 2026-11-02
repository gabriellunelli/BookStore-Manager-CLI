import { EMPRESTIMOS_INICIAIS } from "../data/seed"
import { CLIENTES, EMPRESTIMOS, LIVROS } from "../data/store"
import { Emprestimo } from "../models/EmprestimoModel"
import { perguntarInteiro } from "../utils/entrada"

export { EMPRESTIMOS }

export function carregarEmprestimosIniciais(): void {
    EMPRESTIMOS.splice(0, EMPRESTIMOS.length, ...EMPRESTIMOS_INICIAIS.map(emprestimo => ({ ...emprestimo })))
}

export async function realizarEmprestimo(clienteId: number, livroId: number): Promise<boolean> {
    const cliente = CLIENTES.find(item => item.id === clienteId)
    if (!cliente) {
        console.log("O cliente informado não existe.")
        return false
    }

    const livro = LIVROS.find(item => item.id === livroId)
    if (!livro) {
        console.log("O livro informado não existe.")
        return false
    }

    const quantidade = await perguntarInteiro(
        `O estoque atual de "${livro.nome}" é ${livro.estoque}. Quantos exemplares serão emprestados?\n`,
        1
    )
    if (quantidade === null) return false

    if (quantidade > livro.estoque) {
        console.log("A quantidade informada é maior que o estoque.")
        return false
    }

    livro.estoque -= quantidade
    const dataAtual = new Date().toISOString().slice(0, 10)
    const emprestimo: Emprestimo = {
        cliente_id: cliente.id,
        livro_id: livro.id,
        quantidade,
        data_emprestimo: dataAtual
    }

    EMPRESTIMOS.push(emprestimo)
    console.log("O empréstimo foi realizado com sucesso.")
    return true
}

export function realizarDevolucao(clienteId: number, livroId: number): boolean {
    const cliente = CLIENTES.find(item => item.id === clienteId)
    if (!cliente) {
        console.log("O cliente informado não existe.")
        return false
    }

    const livro = LIVROS.find(item => item.id === livroId)
    if (!livro) {
        console.log("O livro informado não existe.")
        return false
    }

    const emprestimosDoLivro = EMPRESTIMOS.filter(
        emprestimo => emprestimo.cliente_id === clienteId && emprestimo.livro_id === livroId
    )
    if (emprestimosDoLivro.length === 0) {
        console.log(`O empréstimo de "${livro.nome}" para "${cliente.nome}" não existe.`)
        return false
    }

    const quantidadeDevolvida = emprestimosDoLivro.reduce(
        (total, emprestimo) => total + emprestimo.quantidade,
        0
    )
    for (let indice = EMPRESTIMOS.length - 1; indice >= 0; indice--) {
        const emprestimo = EMPRESTIMOS[indice]
        if (emprestimo?.cliente_id === clienteId && emprestimo.livro_id === livroId) {
            EMPRESTIMOS.splice(indice, 1)
        }
    }

    livro.estoque += quantidadeDevolvida
    console.log(`A devolução de ${quantidadeDevolvida} exemplar(es) foi realizada com sucesso.`)
    return true
}

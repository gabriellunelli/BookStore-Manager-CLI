import { CLIENTES_INICIAIS } from "../data/seed"
import { CLIENTES, EMPRESTIMOS } from "../data/store"
import { Cliente } from "../models/ClientesModel"
import { perguntarTexto } from "../utils/entrada"
import { verificar } from "../utils/verificarVazio"

export { CLIENTES }

export function carregarClientesIniciais(): void {
    CLIENTES.splice(0, CLIENTES.length, ...CLIENTES_INICIAIS.map(cliente => ({ ...cliente })))
}

export function cadastrarCliente(cliente: Cliente): boolean {
    if (!Number.isSafeInteger(cliente.id) || cliente.id < 1 || !cliente.nome.trim() || !cliente.email.trim()) {
        console.log("Não foi possível cadastrar: informe um ID, nome e e-mail válidos.")
        return false
    }

    if (CLIENTES.some(clienteCadastrado => clienteCadastrado.id === cliente.id)) {
        console.log("Já existe um cliente com esse ID.")
        return false
    }

    if (CLIENTES.some(clienteCadastrado => clienteCadastrado.email === cliente.email.trim())) {
        console.log("Já existe um cliente com esse e-mail.")
        return false
    }

    CLIENTES.push({ ...cliente, nome: cliente.nome.trim(), email: cliente.email.trim() })
    return true
}

export function listarClientes(): void {
    console.log(CLIENTES)
}

export function consultarClienteEspecifico(id: number): Cliente | null {
    const cliente = CLIENTES.find(item => item.id === id)
    if (!verificar(cliente)) {
        return null
    }

    console.log(cliente)
    return cliente
}

export async function atualizarCliente(id: number): Promise<boolean> {
    const cliente = CLIENTES.find(item => item.id === id)
    if (!verificar(cliente)) {
        return false
    }

    const novoNome = await perguntarTexto("Informe o novo nome do cliente: ")
    if (novoNome === null) return false

    const novoEmail = await perguntarTexto("Informe o novo e-mail do cliente: ")
    if (novoEmail === null) return false

    if (CLIENTES.some(item => item.id !== id && item.email === novoEmail)) {
        console.log("Já existe um cliente com esse e-mail.")
        return false
    }

    cliente.nome = novoNome
    cliente.email = novoEmail
    return true
}

export function removerCliente(id: number): boolean {
    const indice = CLIENTES.findIndex(item => item.id === id)
    if (indice === -1) {
        console.log("O ID informado não retorna nenhum cliente.")
        return false
    }

    if (EMPRESTIMOS.some(emprestimo => emprestimo.cliente_id === id)) {
        console.log("Não é possível remover um cliente que possui empréstimos cadastrados.")
        return false
    }

    CLIENTES.splice(indice, 1)
    return true
}

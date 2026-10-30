import { CLIENTES_INICIAIS } from "../data/seed";
import { Cliente } from "../models/ClientesModel";
import { verificar } from "../utils/verificarVazio";

export const CLIENTES:Cliente[] = []

export function carregarClientesIniciais() {
    for (const cliente of CLIENTES_INICIAIS) {
        CLIENTES.push(cliente)
    }
}

export function cadastrarCliente(cliente:Cliente) {
    CLIENTES.push(cliente)
    
}

export function listarClientes() {
    console.log(CLIENTES)
}

export function consultarClienteEspecifico(id:number) {
    const verificacao = verificar(CLIENTES[id])
    if (verificacao === true){
        console.log(CLIENTES[id])
    }
    
}

export function atualizarCliente(id:number) {
    if (CLIENTES[id] != null && CLIENTES[id] != undefined){

        let novoNome = prompt('Informe o novo nome do cliente: ')
        while (novoNome === null) {
            console.log('Nenhum dado informado, por favor digite um valor válido.')

            novoNome = prompt('Informe o novo nome do cliente: ')

        }
        CLIENTES[id].nome = novoNome

        let novoEmail = prompt('Informe o novo e-mail do cliente: ')
        while (novoEmail === null) {
            console.log('Nenhum dado informado, por favor digite um valor válido.')

            novoEmail = prompt('Informe o novo e-mail do cliente: ')

        }
        CLIENTES[id].email = novoEmail

    }
}

export function removerCliente(id:number) {
    const verificacao = verificar(CLIENTES[id])
    if (verificacao === true){
        CLIENTES.splice(id)
    } else {
        console.log('O id informado não retorna nenhum cliente.')
    }
}
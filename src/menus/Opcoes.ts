import { erro } from "../utils/formatarTexto"
import { perguntar } from "../utils/entrada"
import { verificarRespostaAutor, verificarRespostaCliente, verificarRespostaEmprestimo, verificarRespostaLivro } from "../utils/verificarResposta"

export function exibirCabecalho() {
    console.log('============================')
    console.log('== BOOK STORE MANAGER CLI ==')
    console.log('============================\n')
}

export async function exibirOpcoesIniciais(): Promise<string | null> {
    console.log('1 - [CLIENTES]')
    console.log('2 - [AUTORES]')
    console.log('3 - [LIVROS]')
    console.log('4 - [EMPRÉSTIMOS]\n')

    console.log('5 - [SAIR]\n')

    console.log('============================\n')

    return perguntar('Qual dos valores acima você gostaria de consultar as opções?\n')
}

export async function exibirSegundasOpcoes(): Promise<string | null> {
    console.log('1 - [LISTAR TODOS]')
    console.log('2 - [CONSULTAR UM ESPECÍFICO]')
    console.log('3 - [CADASTRAR]')
    console.log('4 - [ATUALIZAR]')
    console.log('5 - [DELETAR]\n')

    console.log('============================\n')

    return perguntar('O que você gostaria de realizar?\n')
}


export async function exibirSegundasOpcoesEmprestimo(): Promise<string | null> {
    console.log('1 - [REALIZAR UM EMPRÉSTIMO]')
    console.log('2 - [REALIZAR UMA DEVOLUÇÃO]\n')

    console.log('============================\n')
    
    return perguntar('O que você gostaria de realizar?\n')
}

export async function questionarOpcoes(resposta: string): Promise<void> {
    if (resposta === '1') {
        const resposta2 = await exibirSegundasOpcoes()
        if (resposta2 !== null) await verificarRespostaCliente(resposta2)
        
    } else if (resposta === '2'){
        const resposta2 = await exibirSegundasOpcoes()
        if (resposta2 !== null) await verificarRespostaAutor(resposta2)
        
    } else if (resposta === '3'){
        const resposta2 = await exibirSegundasOpcoes()
        if (resposta2 !== null) await verificarRespostaLivro(resposta2)

    } else if (resposta === '4'){
        const resposta2 = await exibirSegundasOpcoesEmprestimo()
        if (resposta2 !== null) await verificarRespostaEmprestimo(resposta2)
        
    } else {
        erro('O valor inserido é inválido.')
    }
}

export function exibirRodape() {
    console.log('=========================')
}
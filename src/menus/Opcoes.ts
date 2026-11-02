import { erro } from "../utils/formatarTexto"
import { verificarRespostaAutor, verificarRespostaCliente, verificarRespostaEmprestimo, verificarRespostaLivro } from "../utils/verificarResposta"

export function exibirCabecalho() {
    console.log('============================')
    console.log('== BOOK STORE MANAGER CLI ==')
    console.log('============================\n')
}

export function exibirOpcoesIniciais() {
    console.log('1 - [CLIENTES]')
    console.log('2 - [AUTORES]')
    console.log('3 - [LIVROS]')
    console.log('4 - [EMPRÉSTIMOS]\n')

    console.log('5 - [SAIR]\n')

    console.log('============================\n')

    let resposta = prompt('Qual dos valores acima você gostaria de consultar as opções?\n')
    while (resposta === null) {
        resposta = prompt('O que você gostaria de realizar?\n')
    }
    return resposta
}

export function exibirSegundasOpcoes() {
    console.log('1 - [LISTAR TODOS]')
    console.log('2 - [CONSULTAR UM ESPECÍFICO]')
    console.log('3 - [CADASTRAR]')
    console.log('4 - [ATUALIZAR]')
    console.log('5 - [DELETAR]\n')

    console.log('============================\n')

    let resposta = prompt('O que você gostaria de realizar?\n')

    while (resposta === null) {
        resposta = prompt('O que você gostaria de realizar?\n')
    }

    return resposta
}


export function exibirSegundasOpcoesEmprestimo() {
    console.log('1 - [REALIZAR UM EMPRÉSTIMO]')
    console.log('2 - [REALIZAR UMA DEVOLUÇÃO]\n')

    console.log('============================\n')
    
    let resposta = prompt('O que você gostaria de realizar?\n')

    while (resposta === null) {
        resposta = prompt('O que você gostaria de realizar?\n')
    }

    return resposta
}

export function questionarOpcoes(resposta:string) {
    if (resposta === '1') {
        const resposta2 = exibirSegundasOpcoes()
        verificarRespostaCliente(resposta2)
        
    } else if (resposta === '2'){
        const resposta2 = exibirSegundasOpcoes()
        verificarRespostaAutor(resposta2)
        
    } else if (resposta === '3'){
        const resposta2 = exibirSegundasOpcoes()
        verificarRespostaLivro(resposta2)

    } else if (resposta === '4'){
        const resposta2 = exibirSegundasOpcoesEmprestimo()
        verificarRespostaEmprestimo(resposta2)
        
    } else {
        erro('O valor inserido é inválido.')
    }
}

export function exibirRodape() {
    console.log('=========================')
}
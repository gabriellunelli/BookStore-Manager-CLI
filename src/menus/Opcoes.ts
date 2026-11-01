
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

    console.log('============================\n')

    const resposta = prompt('Qual dos valores acima você gostaria de consultar as opções?\n')
    return resposta
}

export function questionar(){
    const resposta = prompt('O que deseja realizar')
    return resposta
}

export function exibirRodape() {
    console.log('=========================')
}
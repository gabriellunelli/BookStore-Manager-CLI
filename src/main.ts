import { exibirCabecalho, exibirOpcoesIniciais, exibirSegundasOpcoes, questionarOpcoes } from "./menus/Opcoes";

while (true) {
    exibirCabecalho()
    
    const resposta = exibirOpcoesIniciais()
    if (resposta === '5') {
        break
    }
    questionarOpcoes(resposta)
}
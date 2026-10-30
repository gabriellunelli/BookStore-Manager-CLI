import { AUTORES_INICIAIS } from "../data/seed";
import { Autor } from "../models/AutorModel";
import { verificar } from "../utils/verificarVazio";

export const AUTORES:Autor[] = []

export function carregarAutoresIniciais() {
    for (const autor of AUTORES_INICIAIS) {
        AUTORES.push(autor)
    }
}

export function cadastrarAutor(autor:Autor) {
    AUTORES.push(autor)
}

export function listarAutores() {
    console.log(AUTORES)
}

export function consultarAutorEspecifico(autor_id:number) {
    const verificacao = verificar(AUTORES[autor_id])
    if (verificacao === true){
        console.log(AUTORES[autor_id])
    }
    
}

export function atualizarAutor(autor_id:number) {
    if (AUTORES[autor_id] != null && AUTORES[autor_id] != undefined){
        let novoId:number = Number(prompt('Informe o novo ID do autor: '))
        while (novoId === null) {
            console.log('Nenhum dado informado, por favor digite um valor válido.')

            novoId = Number(prompt('Informe o novo ID do autor: '))

        }

        AUTORES[autor_id].id = novoId

        let novoNome = prompt('Informe o novo nome do autor: ')
        while (novoNome === null) {
            console.log('Nenhum dado informado, por favor digite um valor válido.')

            novoNome = prompt('Informe o novo nome do autor: ')

        }
        AUTORES[autor_id].nome = novoNome
    }
}

export function removerAutor(autor_id:number) {
    const verificacao = verificar(AUTORES[autor_id])
    if (verificacao === true){
        AUTORES.splice(autor_id)
    }
}
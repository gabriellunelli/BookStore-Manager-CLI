import { AUTORES } from "../data/seed";
import { Autor } from "../models/AutorModel";
import { verificar } from "../utils/verificarVazio";

const autores:Autor[] = []

export function carregarAutores() {
    for (const autor of AUTORES) {
        autores.push(autor)
    }
}

export function cadastrarAutor(autor:Autor) {
    autores.push(autor)
}

export function listarAutores() {
    console.log(autores)
}

export function consultarAutorEspecifico(autor_id:number) {
    const verificacao = verificar(autores[autor_id])
    if (verificacao === true){
        console.log(autores[autor_id])
    }
    
}

export function atualizarAutor(autor_id:number) {
    if (autores[autor_id] != null && autores[autor_id] != undefined){
        let novoId:number = Number(prompt('Informe o novo ID do autor: '))
        while (novoId === null) {
            console.log('Nenhum dado informado, por favor digite um valor válido.')

            novoId = Number(prompt('Informe o novo ID do autor: '))

        }

        autores[autor_id].id = novoId

        let novoNome = prompt('Informe o novo nome do autor: ')
        while (novoNome === null) {
            console.log('Nenhum dado informado, por favor digite um valor válido.')

            novoNome = prompt('Informe o novo nome do autor: ')

        }
        autores[autor_id].nome = novoNome
    }
}

export function removerAutor(autor_id:number) {
    const verificacao = verificar(autores[autor_id])
    if (verificacao === true){
        autores.splice(autor_id)
    }
}
import { LIVROS_INICIAIS } from "../data/seed";
import { Livro } from "../models/LivroModel";
import { verificar } from "../utils/verificarVazio";
import { AUTORES } from "./AutorRepository";

export const LIVROS:Livro[] = []

export function carregarLivrosIniciais() {
    for (const livro of LIVROS_INICIAIS) {
        LIVROS.push(livro)
    }
}

export function cadastrarLivro(livro:Livro) {
    AUTORES.forEach(autor => {
        if (autor.id === livro.autor_id){
            LIVROS.push(livro)
        }
    });
    
}

export function listarLivros() {
    console.log(LIVROS)
}

export function consultarLivroEspecifico(id:number) {
    const verificacao = verificar(LIVROS[id])
    if (verificacao === true){
        console.log(LIVROS[id])
    }
    
}

export function atualizarLivro(id:number) {
    if (LIVROS[id] != null && LIVROS[id] != undefined){

        let novoNome = prompt('Informe o novo nome do livro: ')
        while (novoNome === null) {
            console.log('Nenhum dado informado, por favor digite um valor válido.')

            novoNome = prompt('Informe o novo nome do livro: ')

        }
        LIVROS[id].nome = novoNome

        let novoAutorId:number = Number(prompt('Informe o novo ID do autor: '))
        while (novoAutorId === null) {
            console.log('Nenhum dado informado, por favor digite um valor válido.')

            novoAutorId = Number(prompt('Informe o novo ID do autor: '))

            AUTORES.forEach(autor => {
                if (novoAutorId === autor.id){
                    LIVROS[id].autor_id = novoAutorId
                }
            });

        }

        let novaDataLancamento = prompt('Informe a nova data de lançamento do livro: ')
        while (novaDataLancamento === null) {
            console.log('Nenhum dado informado, por favor digite um valor válido.')

            novaDataLancamento = prompt('Informe a nova data de lanaçamento do livro: ')

        }
        LIVROS[id].data_lancamento = novaDataLancamento

    }
}

export function removerLivro(id:number) {
    const verificacao = verificar(LIVROS[id])
    if (verificacao === true){
        LIVROS.splice(id)
    } else {
        console.log('O id informado não retorna nenhum livro.')
    }
}
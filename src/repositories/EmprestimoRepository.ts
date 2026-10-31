import { EMPRESTIMOS_INICIAIS } from "../data/seed";
import { Emprestimo } from "../models/EmprestimoModel";
import { verificar } from "../utils/verificarVazio";
import { CLIENTES } from "./ClienteRepository";
import { LIVROS } from "./LivroRepository";

export const EMPRESTIMOS:Emprestimo[] = []

export function carregarEmprestimosIniciais() {
    for (const emprestimo of EMPRESTIMOS_INICIAIS) {
        EMPRESTIMOS.push(emprestimo)
    }
}

export function realizarEmprestimo(cliente_id:number, livro_id:number) {
    LIVROS.forEach(livro => {
        if (livro_id === livro.id){
            CLIENTES.forEach(cliente => {
                if (cliente_id === cliente.id ){
                    const quantidade = Number(prompt(`A quantidade atual do livro ${LIVROS[livro_id]?.nome} é de ${LIVROS[livro.id]?.estoque}. Qual a quantidade de livros que será emprestado?\n`))
                    if (quantidade > LIVROS[livro_id]?.estoque) {
                        console.log('A quantidade informada é maior que o estoque.')
                    } else {
                        LIVROS[livro_id].estoque -= quantidade

                        let dataAtual:Date | string = new Date()
                        dataAtual = dataAtual.toString()
                        const emprestimo:Emprestimo = {cliente_id:cliente_id, livro_id:livro_id, quantidade:quantidade, data_emprestimo:dataAtual}

                        EMPRESTIMOS.push(emprestimo)

                        console.log('O empréstimo foi realizado com sucesso.')
                    }
                }
            });
        }
    });
}

export function realizarDevolucao(cliente_id:number, livro_id:number) {
    LIVROS.forEach(livro => {
        if (livro_id === livro.id){
            CLIENTES.forEach(cliente => {
                if (cliente_id === cliente.id ){
                    for (let i = 0; i < EMPRESTIMOS.length; i++) {
                        if (EMPRESTIMOS[i]?.cliente_id === cliente_id && EMPRESTIMOS[i]?.livro_id === livro_id){
                            LIVROS[livro_id].estoque += EMPRESTIMOS[i]?.quantidade

                            EMPRESTIMOS.splice(i)

                            console.log('A devolução foi realizada com sucesso.')
                        } else {
                            console.log(`O emprestimo do livro ${LIVROS[livro_id].nome} para o cliente ${CLIENTES[cliente_id].nome} não existe.`)
                        }
                        
                    }
                    
                } else{
                    console.log('O cliente informado não existe.')
                }
            });
        } else {
            console.log('O livro informado não existe.')
        }
    });
}

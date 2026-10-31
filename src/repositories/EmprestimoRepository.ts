import { EMPRESTIMOS_INICIAIS } from "../data/seed";
import { Emprestimo } from "../models/EmprestimoModel";
import { verificar } from "../utils/verificarVazio";

export const EMPRESTIMOS:Emprestimo[] = []

export function carregarEmprestimosIniciais() {
    for (const emprestimo of EMPRESTIMOS_INICIAIS) {
        EMPRESTIMOS.push(emprestimo)
    }
}


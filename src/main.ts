import { exibirCabecalho, exibirOpcoesIniciais, questionarOpcoes } from "./menus/Opcoes"
import { carregarAutoresIniciais } from "./repositories/AutorRepository"
import { carregarClientesIniciais } from "./repositories/ClienteRepository"
import { carregarEmprestimosIniciais } from "./repositories/EmprestimoRepository"
import { carregarLivrosIniciais } from "./repositories/LivroRepository"
import { fecharEntrada } from "./utils/entrada"

async function main(): Promise<void> {
    carregarAutoresIniciais()
    carregarClientesIniciais()
    carregarLivrosIniciais()
    carregarEmprestimosIniciais()

    try {
        while (true) {
            exibirCabecalho()

            const resposta = await exibirOpcoesIniciais()
            if (resposta === null || resposta === "5") {
                break
            }

            await questionarOpcoes(resposta)
        }
    } finally {
        fecharEntrada()
    }
}

void main()
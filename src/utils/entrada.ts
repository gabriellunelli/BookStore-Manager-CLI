import { createInterface, Interface } from "node:readline"

let terminal: Interface | null = null
let entradaEncerrada = false
const respostas: string[] = []
let aguardarResposta: ((resposta: string | null) => void) | null = null

function obterTerminal(): Interface {
    if (terminal === null) {
        terminal = createInterface({
            input: process.stdin,
            output: process.stdout
        })
        terminal.on("line", resposta => {
            if (aguardarResposta !== null) {
                const concluir = aguardarResposta
                aguardarResposta = null
                concluir(resposta)
            } else {
                respostas.push(resposta)
            }
        })
        terminal.once("close", () => {
            entradaEncerrada = true
            if (aguardarResposta !== null) {
                const concluir = aguardarResposta
                aguardarResposta = null
                concluir(null)
            }
        })
    }

    return terminal
}

export function perguntar(mensagem: string): Promise<string | null> {
    if (respostas.length > 0) {
        process.stdout.write(mensagem)
        return Promise.resolve(respostas.shift() ?? null)
    }

    if (entradaEncerrada) {
        return Promise.resolve(null)
    }

    obterTerminal()
    process.stdout.write(mensagem)

    return new Promise(resolve => {
        aguardarResposta = resolve
    })
}

export async function perguntarTexto(mensagem: string): Promise<string | null> {
    while (true) {
        const resposta = await perguntar(mensagem)
        if (resposta === null) {
            return null
        }

        const valor = resposta.trim()
        if (valor.length > 0) {
            return valor
        }

        console.log("O valor não pode ficar vazio. Tente novamente.")
    }
}

export async function perguntarInteiro(
    mensagem: string,
    valorMinimo = 1
): Promise<number | null> {
    while (true) {
        const resposta = await perguntar(mensagem)
        if (resposta === null) {
            return null
        }

        const valor = resposta.trim()
        if (/^\d+$/.test(valor)) {
            const numero = Number(valor)
            if (Number.isSafeInteger(numero) && numero >= valorMinimo) {
                return numero
            }
        }

        console.log(`Informe um número inteiro maior ou igual a ${valorMinimo}.`)
    }
}

export async function perguntarData(mensagem: string): Promise<string | null> {
    while (true) {
        const resposta = await perguntarTexto(mensagem)
        if (resposta === null) {
            return null
        }

        if (/^\d{4}-\d{2}-\d{2}$/.test(resposta)) {
            const data = new Date(`${resposta}T00:00:00.000Z`)
            if (!Number.isNaN(data.getTime()) && data.toISOString().slice(0, 10) === resposta) {
                return resposta
            }
        }

        console.log("Informe uma data válida no formato AAAA-MM-DD.")
    }
}

export function fecharEntrada(): void {
    terminal?.close()
}

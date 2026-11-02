export function verificar<T>(valor: T | null | undefined): valor is T {
    if (valor == null) {
        console.log('O valor informado não existe.')
        return false
    } else {
        return true
    }
}
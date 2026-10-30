export function verificar(valor:any){
    if (valor === null && valor === undefined) {
        console.log('O valor informado não existe.')
        return false
    } else {
        return true
    }
}
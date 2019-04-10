function concatenar(x,y) {
    return x + y
    
}
function concatenar1(a,b,c,d) {
    return a+b+c+d
}
function invocarFunciones() {
    var cadena=""
    for (let index = 0; index < arguments.length; index++) {
        cadena += arguments[index]()+" "
        
    }
    return cadena

}
function creadorDeIncrementos(valor) {

    return function incremento(incrementos) {

        return valor+incrementos
    }
    
    
}
function invocacionUnica(f1) {
    return f1
    
}
function concatenar(x,y) {
    return x + y
    
}
function concatenar1(a,b,c,d,e) {
    return a+b+c+d+e
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
///no tengo idea como hacer una invocacion unica
function invocacionUnica(fn) {
    var resultado 
    function evalua(){ 
        if(fn) {
            resultado= fn()
            fn = null;
        }
        return resultado;
    }
    
    return resultado
    
}

function objetoConClousure() {
    var numero=0

    var objeto={
        incremento:function() {
            return numero+=1   
        },
        incrementoPor10:function(){
            return numero+=10
        },
        pedirValor:function() {
            return numero    
        },
        cambiarValor:function(x){
            return numero=x
        }
    }
    return objeto


}
///testear funcion para su correcto funcionamiento
function ListaDeFuncionesInvitados(arregloInvitados, codigoSecreto){

    var arreglo=[function(codigo){
        if (codigo===codigoSecreto){
            return arregloInvitados[0]
        }
        else{
            return 'código secreto: invalido'
        }
    },
    function(codigo){
        if (codigo===codigoSecreto){
            return arregloInvitados[1]
        }
        else{
            return 'código secreto: invalido'
        }
    },
    function(codigo){
        if (codigo===codigoSecreto){
            return arregloInvitados[2]
        }
        else{
            return 'código secreto: invalido'
        }
    },
    function(codigo){
        if (codigo===codigoSecreto){
            return arregloInvitados[3]
        }
        else{
            return 'código secreto: invalido'
        }
    },
    function(codigo){
        if (codigo===codigoSecreto){
            return arregloInvitados[4]
        }
        else{
            return 'código secreto: invalido'
        }
    },
    function(codigo){
        if (codigo===codigoSecreto){
            return arregloInvitados[5]
        }
        else{
            return 'código secreto: invalido'
        }
    }]
    
    return arreglo


}
///ultimo ejercicio de funciones !!! vamos carajo 
function armarListaDeInvitados(funcionesInvitado,codigoSecreto) {
    var arra2=[]
    for (let index = 0; index < funcionesInvitado.length; index++) {
        arra2[index]=funcionesInvitado[index](codigoSecreto)
        
    }
    return arra2
    


}
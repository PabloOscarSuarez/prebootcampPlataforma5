function setPropsOnObj(x) {

    x["p"]=5
    x["plataforma"]=5
    x["proximo"]= function ProximoNonumero(y) {
        var resultado= y+1
        return resultado
    }
    x["la"]={clave:{secreta:{es:404}}}
}

function setPropsOnArr(array){
    array[0]=5
    array["hola"]= function saluda() {
        return "Hola!"
        
    }

    array["river"]="plate"
    array["doble"]= function duplico(numero) {

        return duplico*2
        
    }

}
function setPropsOnFunc(functionObject) {
    
    functionObject.year="2017"
    functionObject.mitad= function(x){
        return x/2
    }
    functionObject.prototype= function (a) {
        return "Hello World"

        
    }
  
    }

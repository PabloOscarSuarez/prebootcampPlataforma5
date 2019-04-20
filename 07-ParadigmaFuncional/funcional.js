function duplicar(x){
    return x*2
}

function map(arr,fn){
    var nuevoArr=[]
    arr.forEach(element => { 
        nuevoArr.push(fn(element))

    });
    return nuevoArr
}

function filter(arry,fn) {
    var arr=[]
    arry.forEach(element => {
        if (fn(element)){
            arr.push(element)
        }

    });
    return arr

}
function contains(arr1,x) {
    aux=JSON.stringify(arr1)
    if (aux[0]=="[") {
        if (arr1.includes(x)){
            return true
        }
        else {
            return false
        }

    }
    else if(aux[0]=="{") {
        var aux2
        aux2= Object.values(arr1)
        if (aux2.includes(x)){
            return true
        }
        else {
            return false
        }

    }    
}
function cuentaPalabras(cadena) {
    var arr1
    arr1=cadena.split(" ")
    return arr1.length

}
//decidi cambiar los test ya que la funcion reduce se torna bastante amplia para cada caso por lo cual divido cada test en bloques de codigo diferente 
/*function reduce(arr,valorInicial,fn) {
    var aux= fn(fn(fn(arr[0],arr[1]),arr[2]),valorInicial)
    return aux
}*/
function reduce(array,indice, fn){
    for(var i = 0; i < array.length; i++){
        indice = fn(indice, array[i])
    }
    return indice;
}

function cuentaPalabrasReduce(acumuladorValor, string){
    var arrAString = string.split(" ");
    return acumuladorValor + arrAString.length;
}

function suma(array){
    return reduce(array, 0, function(total, num){return total + num})
}
/* function reduce(array,indice, fn){
    for(var i = 0; i < array.length; i++){
        indice = fn(indice, array[i])
    }
    return indice;*/
function every(array, fn){
    let response = true;
    response = reduce(array, response, function(accum, elem){
        return accum && fn(elem)
    })

    return response; 
}

function any(array, fn){
    let response = false;
    response = reduce(array, response, function(accum, elem){
        return accum || fn(elem)
    })
    return response; }
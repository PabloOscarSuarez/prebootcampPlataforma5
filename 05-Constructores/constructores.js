var arr=[],valorFinal
function CalculadoraNPI() {
   
}
CalculadoraNPI.prototype.agregar=function(x) {
    if (arr.length===0) {
        valorFinal=0
        arr.push(x)
    }    
    else{
        arr.push(x)
    }
}
CalculadoraNPI.prototype.sumar=function(){
  
    if(arr.length===2){
        valorFinal=arr[1]+arr[0]
        arr.pop()
        arr.pop()

    }else if(arr.length===3){    
        valorFinal= arr[2] + arr[1]
        arr.pop()
        arr.pop()
    }
    else{
        valorFinal+=arr[0]
        arr.pop()
    }
}
CalculadoraNPI.prototype.restar=function(){
    if(arr.length===2){
        valorFinal=arr[0]- arr[1]
        arr.pop()
        arr.pop()

    }else if(arr.length===3){    
        valorFinal= arr[1] - arr[2]
        arr.pop()
        arr.pop()
    }
    else{
        valorFinal-=arr[0]
        arr.pop()
    }
}
CalculadoraNPI.prototype.dividir=function(){
    if(arr.length===2){
        valorFinal=arr[0]/arr[1]
        arr.pop()
        arr.pop()

    }else if(arr.length===3){    
        valorFinal= arr[1]/arr[2]
        arr.pop()
        arr.pop()
    }
    else{
        valorFinal/=arr[0]
        arr.pop()
    }
}
CalculadoraNPI.prototype.multiplicar=function(){
    if(arr.length===2){
        valorFinal=arr[0]*arr[1]
        arr.pop()
        arr.pop()

    }else if(arr.length===3){    
        valorFinal= arr[1]*arr[2]
        arr.pop()
        arr.pop()
    }
    else{
        valorFinal*=arr[0]
        arr.pop()
    }
}
CalculadoraNPI.prototype.valor=function(){
    
    return valorFinal

    
}

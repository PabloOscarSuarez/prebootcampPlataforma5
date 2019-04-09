
function crearCalculadora() {
    let res=0
    let calc={
        valor:function(){return res} ,
        sumar:function(x){
            return res+=x
            },
        restar:function(y){
            return res -=y
            },
        reset: function (){return res=0}
    
    
    
    }

    return calc

}

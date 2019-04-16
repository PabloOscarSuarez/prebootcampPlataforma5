function Mamifero(nombre) {

    this.nombre= nombre
    this.descendencia= []
}
Mamifero.prototype.nombre= this.nombre
Mamifero.prototype.descendencia= this.descendencia
Mamifero.prototype.saludar=function() {
    return "Hola, mi nombre es "+ this.nombre
}
Mamifero.prototype.nuevoHijo=function(){

    var objeto={nombre: this.nombre + " Jr"}
    this.descendencia=[this.nombre+ "Jr"]
    return objeto
    
}
function Gato(nombre, color){
    Mamifero.call(this, nombre, color);
    this.color = color
}
gato.prototype.color= this.color
Gato.prototype = Object.create(Mamifero.prototype)
Gato.prototype.constructor = Gato
Gato.descendencia=[gato.nuevoHijo("Negro")]
Gato.prototype.nuevoHijo=function (color) {
    this.color=color
    var obj={nombre: this.nombre + " Jr",color:this.color}
    return obj
}

// suben dos boxeadores a un ring, y quien mejores atributos tenga, gana la pelea.
// cada boxeador tiene 3 atributos, fuerza, agilidad, stamina.

var EligeATuLuchador = prompt("Elige a tu luchador. ¿Samid o Viale?")
console.log(EligeATuLuchador.trim('').length())
function Luchador(nombre, fuerza, agilidad, stamina){
this.nombre = nombre
this.fuerza = fuerza
this.agilidad = agilidad
this.stamina = stamina

function IntimidarPais(){
if(this.nombre == "Samid"){
alert("usted se tiene que arrepentir de lo que dijo")
}
else(this.nombre == "Viale"){
alert("usted avaló el atentado a la AMIA")
}

if(this.nombre != "Samid" || this.nombre != "Viale"){
alert("Nombre incorrecto! solo pelean Samid y Viale")
};







}


}

var Samid = new Luchador("Samid", "80", "50", "30", "80")

var Viale = new Luchador("Viale", "60", "70", "40", "80")

IntimidarPais()

function infoUsuario() {
   var nombre = document.getElementById("Nombre").value
   var apellido = document.getElementById("Apellido").value
   var edad =document.getElementById("Edad").value
   alert("Buenas tardes "+nombre+" "+apellido+ " tu edad es " +edad)
}
var sel = document.getElementById('cuotas');
console.log(sel.value);
var cuotas = document.getElementsByClassName("cuota");
var botonEnviar = document.getElementById("enviar");
var precio = document.getElementById("precio")
var tasa = document.getElementById("tasaInteres");
// precio tasa de interes
alert("Ingresa el precio elegido, la cantidad de cuotas y la tasa")
botonEnviar.addEventListener("click",() => {
    while(true){

        var precioElegido = precio.value;
        var opcionElegida = sel.value;
        var tasaElegida = tasa.value;
        var i = 2
        console.log(i)
        if(precioElegido == 0){
            alert("el precio no puede ser 0");
            break;
        }
        else if(tasaElegida >= 40){
            alert("La tasa maxima es del 40%")
            break;
        }
        else{
            tasaElegida = tasaElegida / 100;
            console.log(tasaElegida)
            console.log(${opcionElegida} ${precioElegido} ${tasaElegida})
            alert(El valor de cada cuota sera ${Math.floor(((precioElegido / opcionElegida) + (precioElegido*tasaElegida))*100)/100})
            break; 
        }

    }

}
)
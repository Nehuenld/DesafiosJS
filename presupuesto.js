//Esto seria un form para conseguir la informacion basica del usuario como la provincia , numero de telefono , 
//nombre completo o la edad para poder mostrar un presupuesto mas acertado a sus necesidades .Esto se sube al local storage
//para poder usarlo despues

var presupuesto =document.getElementById("presupuesto")

presupuesto.onsubmit= function informacionUsuario() {
    event.preventDefault()
    var resultado=document.getElementById("resultado")
    resultado.innerHTML="Hola "+ presupuesto.nombreCompleto.value+ " tu numero de telefono es " + presupuesto.telefono.value + " vivis en la provincia de "+presupuesto.provincia.value+ " y tenes "+presupuesto.edad.value+" años . Elegiste para tener "+presupuesto.clasesPracticas.value +" clases practicas y "+presupuesto.clasesTeoricas.value
    localStorage.setItem("Nombre del usuario",presupuesto.nombreCompleto.value)
    localStorage.setItem("Numero de telefono usuario",presupuesto.telefono.value)
    localStorage.setItem("Provincia de residencia usuario",presupuesto.provincia.value)
    localStorage.setItem("Edad del usuario",presupuesto.edad.value)
    localStorage.setItem("Edad del usuario",presupuesto.edad.value)
    localStorage.setItem("Clases practicas",presupuesto.clasesPracticas.value)
    localStorage.setItem("Clases teoricas",presupuesto.clasesTeoricas.value)

}


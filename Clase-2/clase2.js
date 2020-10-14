var edad
var padre
var zona
edad=prompt("Cual es tu edad.")
zona=prompt("En que zona vivs?")
if (edad>17 && zona=="San Isidro"){
    alert("Cumplis los requisitos para ingresar")
}
else{
    padre=prompt("Estas con un adulto responsable? SI O NO")
    if(padre=="SI" && zona=="San Isidro"){
        alert("Podes ingresar al sitio")
    }
    else{
        alert("No podes ingresar")
    }
}

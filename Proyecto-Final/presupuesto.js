
function presupuesto(edad,primeraVez,teorico,practico,total) {
    alert("Para empezar con tu presupuesto personalizado nos gustaria preguntarte unas cosas para hacer tu pack de clases lo mas acertado a tus necesidades.")
    edad=prompt("Cual es tu edad?")
    if (edad <14) {
        alert("La edad minima para empezar el curso de manejo es de 15 años")
    }

     else {
        primeraVez=prompt("Es tu primera vez sacando el registro?").toLocaleLowerCase()
        if (primeraVez=="si") {
            alert("El promedio de clases que necesita cada alumno para tener el nivel necesario para poder conseguir el registro son de 14 practicas y 7 teorias. Usa esto de guia para ver cuantas clases vas a necesitar")
            teorico=prompt("Cuantas clases de teorico necesitas (En numeros porfavor)")
            practico=prompt("Cuantas clases de practico necesitas (En numeros porfavor)")
            alert("Tu presupuesto para unas "+ (parseInt(teorico)+parseInt(practico)) +" clases entre ellas "+teorico+ " teoricas y "+practico+" practicas tendrian un valor aproximado de " + (parseInt(teorico)*400+parseInt(practico)*700)+" pesos Argentinos")
        }
        else{
            teorico=prompt("Cuantas clases de teorico necesitas (En numeros porfavor)")
            practico=prompt("Cuantas clases de practico necesitas (En numeros porfavor)")
            alert("Tu presupuesto para unas "+ (parseInt(teorico)+parseInt(practico)) +" clases entre ellas "+teorico+ " teoricas y "+practico+" practicas tendrian un valor aproximado de " + (parseInt(teorico)*400+parseInt(practico)*700)+" pesos Argentinos")
        }
           
    }

}
presupuesto()

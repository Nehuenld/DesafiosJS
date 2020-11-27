const pregunta = $('#pregunta');
const elecciones = Array.from($('.opcionTexto'));

let preguntaActual = {};
let preguntaAceptada = false;
let puntaje = 0;
let contadorPreguntas = 0;
let preguntasDisponibles = [];

let preguntas = [
    {
        pregunta: '¿Quién lleva el título de "El rugido del trueno"?',
        eleccion1: 'Volibear',
        eleccion2: ' Fizz',
        eleccion3: 'Ashe',
        eleccion4: 'Kennen',
        respuesta: 1,
    },
    {
        pregunta:
            "¿Cómo se llama el continente donde se juega League of Legends?",
        eleccion1: "Demacia",
        eleccion2: "Ciudad de vandalos",
        eleccion3: "Valoran",
        eleccion4: "Tuscon",
        respuesta: 3,
    },
    {
        pregunta: "¿Es cierto que Corki solía tener un cegador en su conjunto de habilidades?",
        eleccion1: "Si",
        eleccion2: "No",
        eleccion3: "lorem iPSUM",
        eleccion4: "hola profe :)",
        respuesta: 4,
    },
];

//CONSTANTES
const bonusCorrecto = 10;
const preguntasMaximas = 3;

arrancarPartida = () => {
    contadorPreguntas = 0;
    puntaje = 0;
    preguntasDisponibles = [...preguntas];
    nuevaPregunta();
};

nuevaPregunta = () => {
    if (preguntasDisponibles.length === 0 || contadorPreguntas >= preguntasMaximas) {
        return window.location.assign('index.html');
    }
    contadorPreguntas++;
    const preguntasTotales = Math.floor(Math.random() * preguntasDisponibles.length);
    preguntaActual = preguntasDisponibles[preguntasTotales];
    pregunta.innerText = preguntaActual.pregunta;

    elecciones.forEach((eleccion) => {
        const numero = eleccion.dataset['number'];
        eleccion.innerText = preguntaActual['eleccion' + numero];
    });

    preguntasDisponibles.splice(preguntasTotales, 1);
    preguntaAceptada = true;
};

elecciones.forEach((eleccion) => {
    eleccion.addEventListener('click', (e) => {
        if (!preguntaAceptada) return;

        preguntaAceptada = false;
        const elegida = e.target;
        const respuestaElegida = elegida.dataset['number'];

        const claseAplicada ='incorrecto';
        if (respuestaElegida==preguntaActual.answer){
            claseAplicada='correcto'
        }
        console.log(claseAplicada)


        nuevaPregunta();
    });
});

arrancarPartida();

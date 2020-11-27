const seccionInicio = document.querySelector('.seccionInicio')
const jugar = document.querySelector('.jugar')
setTimeout( () => {
    seccionInicio.classList.remove('contenidoEscondido')
}, 800)

jugar.addEventListener('click', (e) => {
  e.preventDefault()
  seccionInicio.classList.add('contenidoEscondido')
  setTimeout( () => {
    seccionInicio.style.opacity = 0;
  }, 800)
  setTimeout(function cambiarVentana(){
      window.location.href= 'usuario.html'
  },2000)


})


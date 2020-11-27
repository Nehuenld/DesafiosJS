document.getElementById('enviarUsuario').onkeydown = function(e){
    if(e.keyCode == 13){
        function guardarUsuario() {
            const nombreUsuario =document.getElementById('enviarUsuario').value
            localStorage.setItem('Nombre de usuario',nombreUsuario)   
        }
        setTimeout(function cambiarVentana(){
            window.location.href= 'trivia.html'
        },250)
    }

 };
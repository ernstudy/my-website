var menu = document.getElementById('menu');
var nav = document.getElementById('nav');

function mostrar_Menu () {
    nav.classList.toggle('active');
    menu.classList.toggle('bx-x')
}

menu.addEventListener('click', mostrar_Menu);


// HEADER

const header = document.querySelector("header");
window.addEventListener('scroll', () =>{
    header.classList.toggle('stcky', this.window.scrollY > 80);
})


// Formulary

var contacto = document.getElementById('contacto'),
     nombre = contacto.nombre
     correo = contacto.correo
     mensage = contacto.mensage
var  error1 = document.getElementById('error1')
var  error2 = document.getElementById('error2')
var  error3 = document.getElementById('error3');



     function validar_nombre(e) {
        if (nombre.value == '' || nombre.value == null ) {
            console.log('Please write your Full Name*')
            error1.style.display = 'block'
            error1.style.marginBottom = '-10px'
            error1.innerHTML = error1.innerHTML + 'Please write your Full Name*'
            e.preventDefault();
        }
        
     }


     function validar_correo(e) {
        if (correo.value == '' || correo.value == null ) {
            console.log('Please enter your email*')
            error2.style.display = 'block'
            error2.style.marginBottom = '-10px'
            error2.innerHTML = error2.innerHTML + 'Please enter your email*'
            e.preventDefault();
        }
        
     }

     function validar_mensage(e) {
        if (mensage.value == '' || mensage.value == null ) {
            console.log('Please write your message here*')
            error3.style.display = 'block'
            error3.style.marginBottom = '-10px'
            error3.innerHTML = error3.innerHTML + 'Please write your message here*'
            e.preventDefault();
        }
     }


     function validar_formulario(e) {

        error1.innerHTML = ''
        error2.innerHTML = ''
        error3.innerHTML = ''

        validar_nombre(e);
        validar_correo(e);
        validar_mensage(e);
     }

contacto.addEventListener('submit', validar_formulario);


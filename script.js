// Obtener el formulario
const formularioContacto = document.getElementById('formularioContacto');

// Agregar un evento de envío al formulario
formularioContacto.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    // Aquí puedes realizar cualquier acción con los datos del formulario
    // Por ejemplo, enviarlos a un servidor o mostrar un mensaje de éxito
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Teléfono:', telefono);
    console.log('Asunto:', asunto);
    console.log('Mensaje:', mensaje);

    // Restablecer los valores del formulario
    formularioContacto.reset();
});

// efecto de desplazamiento suave al hacer clic en los enlaces del menú
const menuLinks = document.querySelectorAll('.navbar a');
menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Agregar efecto de desplazamiento al menú al hacer scroll
window.addEventListener('scroll', function() {
    var menu = document.querySelector('.menu');
    var header = document.querySelector('.header');
    var headerBottom = header.offsetTop + header.offsetHeight;
    
    if (window.pageYOffset > headerBottom) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});

  
// ... código JavaScript anterior ...

// Agregar funcionalidad al botón de alternancia del menú
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('active');
});

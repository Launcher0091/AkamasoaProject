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

  /** EFECTO MENU
   * 
   * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
   *
   * @private
   * @author Todd Motto
   * @link https://github.com/toddmotto/foreach
   * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
   * @callback requestCallback      callback   - Callback function for each iteration.
   * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
   * @returns {}
   */
    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
    const hamburger = document.querySelector('.hamburger');
    const menuItems = document.getElementById('menu-items');
    
    hamburger.addEventListener('click', function() {
        menuItems.style.display = menuItems.style.display === 'block' ? 'none' : 'block';
    });
  
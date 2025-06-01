// --- Script para el Slider del Hero ---
const sliderItems = document.querySelectorAll('.slider-item'); // Selecciona todos los elementos con la clase 'slider-item' (cada slide)
const dots = document.querySelectorAll('.slider-nav .dot'); // Selecciona todos los puntos de navegación
let currentSlide = 0; // Lleva el control del slide actual, empezando en 0
const slideInterval = 5000; // Define el tiempo en milisegundos (5000ms = 5 segundos) para cambiar de slide automáticamente

// Función para mostrar un slide específico
function showSlide(index) {
  // Oculta todos los slides quitando la clase 'active'
  sliderItems.forEach(item => item.classList.remove('active'));
  // Desactiva todos los puntos de navegación quitando la clase 'active'
  dots.forEach(dot => dot.classList.remove('active'));

  // Muestra el slide actual añadiendo la clase 'active'
  sliderItems[index].classList.add('active');
  // Activa el punto de navegación correspondiente al slide actual
  dots[index].classList.add('active');
}

// Función para avanzar al siguiente slide
function nextSlide() {
  // Calcula el índice del siguiente slide, usando el operador módulo (%) para volver al principio si llega al final
  currentSlide = (currentSlide + 1) % sliderItems.length;
  // Muestra el siguiente slide
  showSlide(currentSlide);
}

// Inicializa el slider: muestra el primer slide al cargar la página
showSlide(currentSlide);
// Configura un intervalo para que la función nextSlide se ejecute automáticamente cada 'slideInterval' milisegundos
setInterval(nextSlide, slideInterval);

// Añade un 'escuchador de eventos' a cada punto de navegación
dots.forEach(dot => {
  dot.addEventListener('click', function() {
    // Obtiene el índice del slide desde el atributo 'data-slide' del punto clicado
    const slideIndex = parseInt(this.dataset.slide);
    // Actualiza el slide actual al índice del punto clicado
    currentSlide = slideIndex;
    // Muestra el slide correspondiente
    showSlide(currentSlide);
  });
});


// --- Script para el formulario de suscripción del footer ---
// Selecciona el formulario con la clase 'footer-contact-form'
// El operador '?' (optional chaining) asegura que no falle si el elemento no existe
document.querySelector('.footer-contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault(); // Evita que la página se recargue al enviar el formulario
  const email = this.querySelector('input[type="email"]').value; // Obtiene el valor del campo de email

  if (email) {
    // Muestra un mensaje de alerta con el correo electrónico ingresado
    alert(`Gracias por suscribirte con: ${email}`);
    this.reset(); // Reinicia el formulario (borra el contenido del campo de email)
  } else {
    // Muestra un mensaje si el campo de email está vacío
    alert("Por favor, introduce un correo electrónico válido.");
  }
});


// --- Script original para el formulario de contacto de la sección (si lo añades de nuevo) ---
// Este script es para el formulario que tenías con id="formulario-contacto".
// Si decidiste usar Formspree en la nueva sección de contacto, ESTE CÓDIGO NO ES NECESARIO para el envío real,
// ya que Formspree lo maneja. Pero si quieres el alert y el reset local, puedes mantenerlo.
// Si NO tienes un elemento con id="formulario-contacto" en tu HTML, este código no hará nada.

const contactForm = document.getElementById("formulario-contacto");
if (contactForm) { // Verifica si el formulario existe antes de añadir el event listener
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita el envío por defecto del formulario

        // Simplemente muestra una alerta y resetea el formulario localmente
        alert("Gracias por contactarnos. Te responderemos pronto.");
        this.reset();
    });
}
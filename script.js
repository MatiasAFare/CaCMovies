var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    speed: 1000,
    effect: "fade",
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
})

//seleccionar el formulario del DOM

const formulario = document.querySelector('form');

//-------------------------------------

//function para mostrar error

const mostrarError = (input, mensaje) => {
    //acceder al div padre
    const divPadre = input.parentNode;
    //encuentra el elemento error-text
    const errorText = divPadre.querySelector('.error-text');
    //agrega la clase error(css) al elemento padre
    divPadre.classList.add('error');
    //agregamos mensaje de error
    errorText.innerText = mensaje;
}

// mostrarError(document.querySelector('#password'),'INGRESA ESTE CAMPO');


//-------------------------------------------


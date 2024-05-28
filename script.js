//Se ejecuta cuando el DOM se carga completamente
document.addEventListener('DOMContentLoaded', () => {


    const formulario = document.querySelector('form');

    //-------------------------------------

    //function para mostrar error

    const mostrarError = (input, mensaje) => {
        //acceder al div padre
        const divPadre = input.parentNode;
        // Se encuentra el elemento error-text
        const errorText = divPadre.querySelector('.error-text');
        //Se agrega la clase error(css) al elemento padre
        divPadre.classList.add('error');
        //agregamos mensaje de error
        errorText.innerText = mensaje;
    }

    const input = document.querySelector('#password');
    const mensaje = 'campo obligatorio';
    //-------------------------------------------
    //Eliminar mensaje de error

    const eliminarError = input => {
        //acceder a la etiqueta contenedora
        const divPadre = input.parentNode;
        //eliminar la clase de error del elemento padre/contenedor
        divPadre.classList.remove('error');
        //encontramos el elemento error-text
        const errorText = divPadre.querySelector('.error-text');
        //establecemos el texto como vacio
        errorText.innerText = '';

    }

    //----------------------------------------------
    //Funcion para corroborar si los campos estan completos para quitar error

    formulario.querySelectorAll('input').forEach(input => {
        //se activa cuando el valor de un elemento del formulario cambia y se sale del elemento
        input.addEventListener('change', () => {
            //obtenemos el valor del campo seleccionado
            const valor = input.value.trim();
            // Eliminar cualquier espacio en blanco (al principio o al final de valor obtenido)

            //condicion para evaluar
            if (valor !== '') {
                eliminarError(input);
            }
        })
    })

    //funcion validar campo

    function validarCampo(campoId, mensaje) {
        const campo = document.getElementById(campoId);
        const value = campo.value.trim();

        if (value == '') {
            mostrarError(campo, mensaje); //indica que validacion fallo
        } else {
            eliminarError(campo)
            return true; // indica validacion exitosa
        }
    }

    function isEmail(email) {
        const expresionRegular = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return expresionRegular.test(email); //True si la cadena coincide con el patrol de expresion regular

    }
    //Funcion / validar campo de email
    function validarEmail(campoId, mensaje) {
        const campo = document.getElementById(campoId);
        const email = campo.value.trim();

        if (email === '') {
            mostrarError(campo, 'El correo electronico es obligatorio');
            return false;
        } else if (!isEmail(email)) {
            mostrarError(campo, mensaje);
            return false;
        } else {
            eliminarError(campo);
            return true;
        }
    }

    //------------------------------------
    //Funcion / Validar Formulario
    const validarFormulario = () => {
        let validar = true;

        //validar email
        validar = validarEmail('email', 'El correo electronico no es valido') && validar;

        validar = validarCampo('password', 'La contraseña es obligatoria') && validar;

        return validar;
    }

    //-----------------------------------

    //agregar evento de escucha cuando se envia el formulario

    formulario.addEventListener('submit', event => {
        event.preventDefault();
        if (!validarFormulario()) {
            event.preventDefault();//evita que el formulario se envia
            console.log("El formulario es valido...")
        } else {
            event.preventDefault();
            console.log("El formulario es valido...")
        }
    })
})

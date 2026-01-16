import { validar, mostrarAlerta } from "./funciones.js";
import { guardarContacto } from "./API.js";

(function () {
    const formulario = document.querySelector('#formulario');

    const nombre = document.querySelector('#nombre');
    const telefono = document.querySelector('#telefono');
    const categoria = document.querySelector('#categoria');
    const email = document.querySelector('#email');

    formulario.addEventListener('submit', validarContacto);

    function validarContacto(e) {
        e.preventDefault();

        const contacto = {
            nombre: nombre.value,
            telefono: telefono.value,
            categoria: categoria.value,
            email: email.value
        }

        if(validar(contacto)){
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        };

        guardarContacto(contacto);
    }

})();
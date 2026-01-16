import { obtenerContacto, actualizarContacto } from "./API.js";
import { mostrarAlerta, validar} from "./funciones.js";

(function () {
    const formulario = document.querySelector('#formulario');

    const nombreInput = document.querySelector('#nombre');
    const telefonoInput = document.querySelector('#telefono');
    const emailInput = document.querySelector('#email');
    const categoriaInput = document.querySelector('#categoria');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', mostrarContacto);
    formulario.addEventListener('submit', validarContacto);

    async function mostrarContacto() {
        const parametroURL = new URLSearchParams(window.location.search);
        const idURL = parametroURL.get('id');

        const contacto = await obtenerContacto(idURL);

        const { id, nombre, telefono, email, categoria } = contacto;

        nombreInput.value = nombre;
        telefonoInput.value = telefono;
        emailInput.value = email;
        categoriaInput.value = categoria;
        idInput.value = id;
    }

    function validarContacto(e) {
        e.preventDefault();

        const contacto = {
            nombre: nombreInput.value,
            telefono: telefonoInput.value,
            categoria: categoriaInput.value,
            email: emailInput.value,
            id: idInput.value
        }

        if (validar(contacto)) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        };

        actualizarContacto(contacto);
    }
})();
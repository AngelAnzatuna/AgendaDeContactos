import { obtenerContacto } from "./API.js";

(function() {
    const nombreInput = document.querySelector('#nombre');
    const telefonoInput = document.querySelector('#telefono');
    const emailInput = document.querySelector('#email');
    const categoriaInput = document.querySelector('#categoria');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', mostrarContacto);

    async function mostrarContacto() {
        const parametroURL = new URLSearchParams(window.location.search);
        const idURL = parametroURL.get('id');

        const contacto = await obtenerContacto(idURL);
        
        const {id, nombre, telefono, email, categoria} = contacto;

        nombreInput.value = nombre;
        telefonoInput.value = telefono;
        emailInput.value = email;
        categoriaInput.value = categoria;
        idInput.value = id;
    }
})();
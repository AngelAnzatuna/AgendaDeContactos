import { obtenerContactos, eliminarContacto } from "./API.js";

(function() {

    const listadoContactos = document.querySelector('#listado-contactos');
    listadoContactos.addEventListener('click', contactoEliminar);

    document.addEventListener('DOMContentLoaded', mostrarContactos);

    async function mostrarContactos() {

        const contactos =  await obtenerContactos();

        contactos.forEach(contacto => {
            const {id, nombre, telefono, categoria, email} = contacto;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td data-label="Nombre: "><p>${nombre}</p></td>
                <td data-label="Teléfono: "><p>${telefono}</p></td>
                <td data-label="Email: "><p>${email}</p></td>
                <td data-label="Categoria: "><p>${categoria}</p></td>
                <td data-label="Acciones: ">
                    <div class="botones-accion">
                        <a class="boton" href="editar-contacto.html?id=${id}">Editar</a>
                        <a data-contacto="${id}" class="boton eliminar" href="#">Eliminar</a>
                    </div>
                </td>
            `;

            listadoContactos.append(row);
        })   
    }

    function contactoEliminar(e) {
        if(e.target.classList.contains('eliminar')){
            const idContacto = e.target.dataset.contacto;

            const confirmar = confirm('Deseas eliminar este contacto?');
            if(confirmar) {
                eliminarContacto(idContacto);
            }
        };
    }
})();
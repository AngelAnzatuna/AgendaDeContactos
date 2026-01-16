export function validar(obj) {
    return Object.values(obj).some(key => key === "");
}

export function mostrarAlerta(mensaje) {
    const alertaPrevia = document.querySelector('.alerta');
    if (!alertaPrevia) {
        const alerta = document.createElement('p');
        alerta.classList.add('alerta');
        alerta.textContent = mensaje;

        const formulario = document.querySelector('#formulario');
        formulario.parentElement.insertBefore(alerta, formulario);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}
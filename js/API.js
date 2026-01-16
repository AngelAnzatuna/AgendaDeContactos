const url = 'http://localhost:3000/contactos';

export const guardarContacto = async contacto => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(contacto),
            headers: {
                'Type-Content': 'application/json'
            }
        })
        window.location.href = 'index.html';
    } catch(error){
        console.log(error);
    }
}

export const obtenerContactos = async () => {
    try {
        const resultado = await fetch(url);
        const contactos = await resultado.json();
        return contactos;
    } catch(error) {
        console.log(error)
    }
}
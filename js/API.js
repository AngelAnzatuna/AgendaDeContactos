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

export const eliminarContacto = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch(error) {
        console.log(error);
    }
}

export const obtenerContacto = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const contacto = await resultado.json();
        return contacto;

    } catch(error) {
        console.log(error);
    }
}

export const actualizarContacto = async contacto => {
    try {
        await fetch(`${url}/${contacto.id}`, {
            method: 'PUT',
            body: JSON.stringify(contacto),
            headers: {
                'Type-Content': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch(error) {
        console.log(error);
    }
}
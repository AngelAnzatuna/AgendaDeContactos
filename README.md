📒 Agenda de Contactos – CRUD con JavaScript

Proyecto de una agenda de contactos desarrollada desde cero, que implementa un CRUD completo consumiendo una API REST simulada con json-server, usando JavaScript Vanilla, HTML y CSS responsive.

🚀 Tecnologías utilizadas

HTML5

CSS3 (Responsive Design)

JavaScript Vanilla (ES Modules)

json-server

Node.js

Git y GitHub

📌 Características principales

CRUD completo de contactos:

Crear contactos

Listar contactos

Editar contactos

Eliminar contactos

Consumo de API REST simulada con json-server

Persistencia de datos en archivo db.json

Arquitectura modular en JavaScript

Uso de async / await y try / catch

Diseño responsive para dispositivos móviles y escritorio

Actualización dinámica de la interfaz sin recargar la página

Validación de formularios y alertas visuales

🎨 Diseño Responsive

Breakpoint principal en 768px

En pantallas pequeñas:

Layout vertical (header, sidebar, main, footer)

En pantallas grandes:

header  header
sidebar main
footer  footer


Uso de CSS Grid para la estructura

Scroll aplicado solo a la lista de contactos cuando excede el alto del contenedor

Diseño visual consistente con botones, enlaces y alertas personalizadas

📂 Estructura del proyecto
/css
 ├── normalize.css
 └── style.css

/js
 ├── API.js
 ├── app.js
 ├── funciones.js
 ├── nuevocontacto.js
 └── editarcontacto.js

db.json
index.html
nuevo-contacto.html
editar-contacto.html
base.html

🔌 API simulada con json-server

Este proyecto utiliza json-server para simular una API REST y manejar la persistencia de datos.

🗄 Base de datos

El archivo db.json fue creado manualmente desde Visual Studio Code con la siguiente estructura inicial:

{
  "contactos": []
}

▶️ Cómo ejecutar el proyecto
1️⃣ Requisitos previos

Tener Node.js instalado (incluye npm)

2️⃣ Clonar el repositorio
git clone https://github.com/AngelAnzatuna/AgendaDeContactos

cd AgendaDeContactos

3️⃣ Ejecutar json-server

Desde la raíz del proyecto, ejecutar:

npx json-server db.json


Esto levantará la API en:

http://localhost:3000


El endpoint principal será:

http://localhost:3000/contactos

4️⃣ Abrir el proyecto

Abrir index.html en el navegador o usar un servidor local como Live Server.

🔄 Endpoints utilizados
Método	Endpoint	Descripción
GET	/contactos	Obtener todos los contactos
GET	/contactos/:id	Obtener contacto por ID
POST	/contactos	Crear un nuevo contacto
PUT	/contactos/:id	Actualizar un contacto
DELETE	/contactos/:id	Eliminar un contacto
📌 Notas importantes

Node.js se utiliza únicamente como entorno de ejecución para json-server

No se implementa un backend real

La aplicación es completamente frontend

👨‍💻 Autor

Angel Anzatuña
📅 2026
🔗 [https://github.com/AngelAnzatuna]
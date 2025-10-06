🧩 Descripción General

Este proyecto es un gestor de invertario para La empresa FORMOTEX que se dedica al mantenimiento y distribución de equipos informáticos
para diversas organizaciones.

⚙️ Tecnologías Utilizadas
| Tipo | Paquete | Descripción |
| ---------------- | ---------------------- | -------------------------------------------- |
| 🔧 Framework | **express** | Servidor HTTP principal |
| 🔐 Seguridad | **bcrypt / bcrypt-ts** | Hashing de contraseñas |
| 🔐 Autenticación | **jsonwebtoken** | Generación y verificación de tokens JWT |
| 🧠 Validación | **zod** | Validación y tipado de datos |
| 🗄️ Base de datos | **mongoose** | ODM para MongoDB |
| 🧩 Configuración | **dotenv / ts-dotenv** | Manejo de variables de entorno |
| 🌐 CORS | **cors** | Habilita peticiones entre dominios |
| 🪵 Logs | **morgan** | Middleware para registrar peticiones |
| 🔁 Desarrollo | **ts-node / nodemon** | Ejecución en caliente y compilación dinámica |

🚀 Instalación y Configuración
1\_ Clonar el repositorio

```bash
git clone https://github.com/jaquelineatienza/Fomotec-ts
cd Formotec-ts

```

2\_ Instalacion de dependencias

```bash
    npm i
```

3\_ Inicio del servidor

```bash
    npm run dev
```

4\_ Crear un archivo .env con los siguientes campos de ejemplo
PORT=
MONGO_URI=
JWT_SECRET=
SESSION_SECRET=

⚙️ Endpoints — Equipos
📋 GET /api/equipos/allEquipos
/---------------------------------------------/
Descripción: Devuelve la lista completa de equipos registrados.
🔒 Requiere autenticación JWT.
✅ 200
❌ 401 Unauthorized → Token no proporcionado o inválido
❌ 500 Internal Server Error → Error al consultar equipos
/------------------------------------------/
🔍 GET /api/equipos/equipos/:id
Descripción: Obtiene la información detallada de un equipo por su ID.
🔒 Requiere autenticación JWT

Posibles respuestas
✅ 200
❌ 404 Not Found → No se encontró el equipo
❌ 401 Unauthorized → Token inválido
/------------------------------------------------/
🛠️ PUT /api/equipos/update/:id

Descripción: Actualiza los datos de un equipo existente.
🔒 Requiere autenticación JWT.
Errores posibles:
✅ 200
❌ 404 Not Found → No se encontró el equipo
❌ 400 Bad Request → Datos inválidos

/----------------------------------------------/
🧑‍💼 Creación de Administradores
🔒 Restricciones

Solo los usuarios con rol admin pueden registrar o promover a otros usuarios como administradores.
Cualquier intento de crear un nuevo administrador desde una cuenta sin privilegios será rechazado con un error 403 (Forbidden).

```yaml
Asunto: Código de verificación para crear cuenta de administrador

Hola [Nombre del usuario],
Tu token de validación para crear una cuenta de administrador es:

🔐 ABCdE#1

Este código expirará en 30 minutos.
Si no solicitaste este acceso, ignora este mensaje.

```

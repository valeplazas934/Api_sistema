// 📌 Cargar variables de entorno desde .env (como elpuerto y la configuración de la base de datos)
require('dotenv').config();
// 📌 Importar módulos necesarios
const express = require('express'); // Framework para manejar el servidor
const cors = require('cors'); // Middleware para habilitar CORS (permite peticiones de otros dominios)
const bodyParser = require('body-parser'); // Middleware para procesar datos JSON en las solicitudes
// 📌 Crear la aplicación Express
const app = express();
// 📌 Definir el puerto del servidor (si no hay un valor en.env, usa 3000)
const port = process.env.PORT || 3000;
// 📌 Configurar middleware
app.use(cors()); // Habilita CORS para permitir accesodesde otros dominios
app.use(bodyParser.json()); // Permite que Express procese datos en formato JSON
// 📌 Ruta de prueba (para verificar que el servidorfunciona correctamente)
app.get('/', (req, res) => {

res.send('API de sistema 🚀'); // Responde conun mensaje cuando se accede a la raíz del servidor
});
const usuarioRoutes = require('./routes/usuario');
app.use('/usuario', usuarioRoutes);

const comentariosRoutes = require('./routes/comentarios');
app.use('/comentarios', comentariosRoutes);

// 📌 Iniciar el servidor
app.listen(port, () => {
console.log(`🚀 Servidor corriendo en
http://localhost:${port}`); // Mensaje en consola al iniciar el servidor
});
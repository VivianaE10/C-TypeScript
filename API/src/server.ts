import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Configuración de variables de entorno
dotenv.config();

// Inicialización de la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000; //puerto

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get("/hello", (req, res) => {
  res.send("Hola desde la API con TypeScript🚀");
});

// POST - Crear datos
app.post('/recursos', (req, res) => {
   res.send("Cfreaste los datos 🚀");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`✅Servidor corriendo en http://localhost:${PORT}`);
});

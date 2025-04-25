const express = require('express');
 const router = express.Router();
 const pool = require('../db');
 // 📌 Crear Cliente
 router.post('/', async (req, res) => {
     try {
     const { Contenido, fecha_creación, idUsuario, idPublicación_cultivos } = req.body;
     const [result] = await pool.execute(
     "INSERT INTO comentarios (Contenido, fecha_creación, idUsuario, idPublicación_cultivos) VALUES (?, ?, ?, ?)",
     [Contenido, fecha_creación, idUsuario, idPublicación_cultivos]
     );
     res.status(201).json({ id: result.insertId, Contenido, fecha_creación, idUsuario, idPublicación_cultivos });
     } catch (error) {
     res.status(500).json({ error: error.message });
     }
     });
 
     module.exports = router;
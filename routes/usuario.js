const express = require('express');
 const router = express.Router();
 const pool = require('../db');
 // 📌 Crear Cliente
 router.post('/', async (req, res) => {
     try {
     const { Nombre, Apellido, Correo, Contraseña } = req.body;
     const [result] = await pool.execute(
     "INSERT INTO usuario (Nombre, Apellido, Correo, Contraseña) VALUES (?, ?, ?, ?)",
     [Nombre, Apellido, Correo, Contraseña]
     );
     res.status(201).json({ id: result.insertId, Nombre, Apellido, Correo, Contraseña });
     } catch (error) {
     res.status(500).json({ error: error.message });
     }
     });
 
     module.exports = router;
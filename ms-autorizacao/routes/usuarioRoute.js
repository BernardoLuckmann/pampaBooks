const express = require('express');
const UsuarioController = require('../controllers/userController');
const verificarToken = require('../middleware/middlewareAutorizacao')
const usuarioRouter = express.Router();

usuarioRouter
.get("/usuarios", UsuarioController.listaUsuarios)
.get("/dadosProtegidos", verificarToken)
.get("/usuario/:id", UsuarioController.readUsuario)
.post("/usuario", UsuarioController.createUsuario)
.post("/usuario/token", UsuarioController.createUsuario)
.post("/usuario/cadastro", UsuarioController.cadastroUsuario)
.post("/usuario/login", UsuarioController.loginUsuario)
.put("/usuario/:id", UsuarioController.updateUsuario)
.delete("/usuario/:id", UsuarioController.deleteUsuario)

module.exports = usuarioRouter;
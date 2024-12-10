const express = require('express');
const LivroController = require('../controllers/livroController');
const livroRouter = express.Router();

livroRouter
.get("/catalogo", LivroController.listaLivros)
.get("/livro/:id", LivroController.readLivro)
.post("/livro/cadastro", LivroController.createLivro)
.put("/livro/:id", LivroController.updateLivro)
.delete("/livro/:id", LivroController.deleteLivro)

module.exports = livroRouter;
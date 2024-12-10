const express = require('express');
const avaliacaoController = require('../controllers/avaliacaoController');
const avaliacaoRouter = express.Router();

avaliacaoRouter
.get("/avaliacoes", avaliacaoController.listaAvaliacao)
.get("/avaliacao/:id", avaliacaoController.readAvaliacao)
.post("/avaliacao", avaliacaoController.createAvaliacao)
.put("/avaliacao/:id", avaliacaoController.updateAvaliacao)
.delete("/avaliacao/:id", avaliacaoController.deleteAvaliacao)

module.exports = avaliacaoRouter;
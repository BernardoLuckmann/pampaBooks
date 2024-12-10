const express = require('express');
const pedidoController = require('../controllers/pedidoController');
const pedidoRouter = express.Router();

pedidoRouter
.get("/historico", pedidoController.listaPedidos)
.get("/historico/:userId", pedidoController.listaPedidosPorUsuario)
.get("/pedido/:id", pedidoController.readPedido)
.post("/pedido", pedidoController.createPedido)
.put("/pedido/:id", pedidoController.updatePedido)
.delete("/pedido/:id", pedidoController.deletePedido)

module.exports = pedidoRouter;
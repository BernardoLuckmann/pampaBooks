const { buscarTodosPedidos, buscarHistoricoPedidosUsuario, criarPedido, atualizarPedido, buscarPedidoPorId, deletarPedido } = require ('../services/pedidoService');

exports.listaPedidos = (async (req, res) => {
        try {
                const pedidos = await buscarTodosPedidos();
                res.json(pedidos);
        } catch (err) {
                res.status(500).json({ message: err.message });
        }
});

exports.createPedido = (async (req, res) => {
        try {
          const novoPedido = await criarPedido(req.body)
          res.status(201).json(novoPedido);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
});

exports.readPedido = (async (req, res) => {
        try {
                const pedido = await buscarPedidoPorId(req.params.id);
                res.json(pedido);
        } catch (error) {
                res.status(400).json({ message: error.message });
        }
});

exports.updatePedido = (async (req, res) => {
        try {
                const pedido = await atualizarPedido(req.params.id, req.body);
                res.json(pedido);
        } catch (error) {
                res.status(400).json({ message: error.message });
        }
});

exports.deletePedido = (async (req, res) => {
        try {
                await deletarPedido(req.params.id);
                res.json({ message: 'Pedido deletado com sucesso' });
        } catch (error) {
                res.status(500).json({ message: error.message });
        }
});

exports.listaPedidosPorUsuario = (async (req, res) => {
        try {
                const pedidos = await buscarHistoricoPedidosUsuario(req.params.userId);
                res.json(pedidos);
        } catch (err) {
                res.status(500).json({ message: err.message });
        }
});


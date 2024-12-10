const Pedido = require("../models/pedido");

const buscarTodosPedidos = async () => {
    try {
        const pedidos = await Pedido.find();
        return pedidos;
    } catch (error) {
        throw new Error('Erro ao buscar pedidos: ' + error.message);
    }
};

const buscarHistoricoPedidosUsuario = async (userId) => {
    try {
        const pedidos = await Pedido.find({ usuarioId: userId });
        return pedidos;
    } catch (error) {
        throw new Error('Erro ao buscar pedidos: ' + error.message);
    }
};

const criarPedido = async (pedido) => {
    try {
        const novoPedido = new Pedido(pedido);
        const pedidoSalvo = await novoPedido.save();
        return pedidoSalvo;
    } catch (error) {
        throw new Error('Erro ao criar Pedido: ' + error.message);
    }
};

const atualizarPedido = async (id, atualizacao) => {
    try {
        const pedido = await Pedido.findByIdAndUpdate(id, atualizacao)
        return pedido;
    } catch (error) {
        throw new Error('Erro ao atualizar Pedido: ' + error.message);
    }
};

const buscarPedidoPorId = async (id) => {
    try {
        const pedido = await Pedido.findById(id)
        return pedido;
    } catch (error) {
        throw new Error('Erro ao encontrar pedido: ' + error.message);
    }
};

const deletarPedido = async (id) => {
    try {
        return await Pedido.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Erro ao encontrar pedido: ' + error.message);
    }
};

module.exports = {
    buscarTodosPedidos,
    buscarHistoricoPedidosUsuario,
    criarPedido,
    atualizarPedido,
    buscarPedidoPorId,
    deletarPedido
}

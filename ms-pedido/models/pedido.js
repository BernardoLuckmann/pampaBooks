const mongoose = require('mongoose');
const { Schema } = mongoose;

const pedidoSchema = new Schema({
  livrosId: [{ type: mongoose.ObjectId, required: true, ref: 'Livro' }],
  usuarioId: { type: mongoose.ObjectId, required: true, ref: 'Usuario'},
  custo: { type: Number, required: true },
  dataCriacao: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Pedido", pedidoSchema);
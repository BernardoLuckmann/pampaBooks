const mongoose = require('mongoose');
const { Schema } = mongoose;

const avaliacaoSchema = new Schema({
  livroId: { type: mongoose.ObjectId, required: true, ref: 'Livro' },
  usuarioId: { type: mongoose.ObjectId, required: true, ref: 'Usuario' },
  nota: {type: Number},
  dataPublicacao: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Avaliacao", avaliacaoSchema);
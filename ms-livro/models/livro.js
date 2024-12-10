const mongoose = require('mongoose');
const { Schema } = mongoose;

const livroSchema = new Schema({
  titulo: { type: String, required: true },
  autores: [{ type: String, required: true }],
  descricao: { type: String, required: true },
  dataPublicacao: { type: Date },
  categorias: [{ type: String, required: true }],
  generos: [{ type: String, required: true }]
});

module.exports = mongoose.model("Livro", livroSchema);
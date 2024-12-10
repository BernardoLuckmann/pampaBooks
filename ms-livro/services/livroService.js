const Livro = require("../models/livro");

const buscarTodosLivros = async () => {
    try {
        const livros = await Livro.find();
        return livros;
    } catch (error) {
        throw new Error('Erro ao buscar livros: ' + error.message);
    }
  };

const criarLivro = async (livro) => {
    try {
        const novoLivro = new Livro(livro);
        const livroSalvo = await novoLivro.save();
        return livroSalvo;
    } catch (error) {
        throw new Error('Erro ao criar livro: ' + error.message);
    }
};

const atualizarLivro = async (id, atualizacao) => {
    try {
        const livro = await Livro.findByIdAndUpdate(id, atualizacao)
        return livro;
    } catch (error) {
        throw new Error('Erro ao atualizar livro: ' + error.message);
    }
};

const buscarLivroPorId = async (id) => {
    try {
        const livro = await Livro.findById(id)
        return livro;
    } catch (error) {
        throw new Error('Erro ao encontrar livro: ' + error.message);
    }
};

const deletarLivro = async (id) => {
    try {
        return await Livro.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Erro ao encontrar livro: ' + error.message);
    }
};

module.exports = {
    buscarTodosLivros,
    criarLivro,
    atualizarLivro,
    buscarLivroPorId,
    deletarLivro
}

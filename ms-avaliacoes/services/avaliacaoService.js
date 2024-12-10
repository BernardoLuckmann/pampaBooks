const Avaliacao = require("../models/avaliacao");

const buscarTodosAvaliacoes = async () => {
    try {
        const avaliacoes = await Avaliacao.find();
        return avaliacoes;
    } catch (error) {
        throw new Error('Erro ao buscar Avaliacaos: ' + error.message);
    }
  };

const criarAvaliacao = async (avaliacao) => {
    try {
        const novoAvaliacao = new Avaliacao(avaliacao);
        const AvaliacaoSalvo = await novoAvaliacao.save();
        return AvaliacaoSalvo;
    } catch (error) {
        throw new Error('Erro ao criar Avaliacao: ' + error.message);
    }
};

const atualizarAvaliacao = async (id, atualizacao) => {
    try {
        const avaliacao = await Avaliacao.findByIdAndUpdate(id, atualizacao)
        return avaliacao;
    } catch (error) {
        throw new Error('Erro ao atualizar Avaliacao: ' + error.message);
    }
};

const buscarAvaliacaoPorId = async (id) => {
    try {
        const Avaliacao = await Avaliacao.findById(id)
        return Avaliacao;
    } catch (error) {
        throw new Error('Erro ao encontrar Avaliacao: ' + error.message);
    }
};

const deletarAvaliacao = async (id) => {
    try {
        return await Avaliacao.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Erro ao encontrar Avaliacao: ' + error.message);
    }
};

module.exports = {
    buscarTodosAvaliacoes,
    criarAvaliacao,
    atualizarAvaliacao,
    buscarAvaliacaoPorId,
    deletarAvaliacao
}

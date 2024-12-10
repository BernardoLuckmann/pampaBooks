const { buscarTodosAvaliacoes,  criarAvaliacao, atualizarAvaliacao, buscarAvaliacaoPorId, deletarAvaliacao } = require ('../services/avaliacaoService');

exports.listaAvaliacao = (async (req, res) => {
        try {
                const avaliacao = await buscarTodosAvaliacoes();
                res.json(avaliacao);
        } catch (err) {
                res.status(500).json({ message: err.message });
        }
});

exports.createAvaliacao = (async (req, res) => {
        try {
          const novoAvaliacao = await criarAvaliacao(req.body)
          res.status(201).json(novoAvaliacao);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
});

exports.readAvaliacao = (async (req, res) => {
        try {
                const avaliacao = await buscarAvaliacaoPorId(req.params.id);
                res.json(avaliacao);
        } catch (error) {
                res.status(400).json({ message: error.message });
        }
    });

exports.updateAvaliacao = (async (req, res) => {
        try {
                const avaliacao = await atualizarAvaliacao(req.params.id, req.body);
                res.json(avaliacao);
        } catch (error) {
                res.status(400).json({ message: error.message });
        }
    });

exports.deleteAvaliacao = (async (req, res) => {
        try {
                await deletarAvaliacao(req.params.id);
                res.json({ message: 'Avaliação deletada com sucesso' });
        } catch (error) {
                res.status(500).json({ message: error.message });
        }
    });

exports.buscarAvaliacaoPorLivroUsuario = (async (req, res) => {
        try {
                const avaliacao = await buscarAvaliacaoPorLivroUsuario( req.body.livroId, req.body.usuarioId );
                res.json(avaliacao);
        } catch (error) {
                res.status(400).json({ message: error.message });
        }
});

exports.atualizaAvaliacaoPorLivroUsuarioNota = (async (req, res) => {
        try {
                const avaliacao = await atualizaAvaliacaoPorLivroUsuarioNota(req.body.livroId, req.body.usuarioId, req.body.nota);
                res.json(avaliacao);
        } catch (error) {
                res.status(400).json({ message: error.message });
        }
});


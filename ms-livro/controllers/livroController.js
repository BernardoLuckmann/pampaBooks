const { buscarTodosLivros, criarLivro, atualizarLivro, buscarLivroPorId, deletarLivro } = require ('../services/livroService');

exports.listaLivros = (async (req, res) => {
        try {
                const livros = await buscarTodosLivros();
                res.json(livros);
        } catch (err) {
                res.status(500).json({ message: err.message });
        }
});

exports.createLivro = (async (req, res) => {
        try {
          const novoLivro = await criarLivro(req.body)
          res.status(201).json(novoLivro);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      });

exports.readLivro = (async (req, res) => {
        try {
                const livro = await buscarLivroPorId(req.params.id);
                res.json(livro);
        } catch (error) {
                res.status(400).json({ message: error.message });
        }
    });

exports.updateLivro = (async (req, res) => {
        try {
                const livro = await atualizarLivro(req.params.id, req.body);
                res.json(livro);
        } catch (error) {
                res.status(400).json({ message: error.message });
        }
    });

exports.deleteLivro = (async (req, res) => {
        try {
                await deletarLivro(req.params.id);
                res.json({ message: 'Livro deletado com sucesso' });
        } catch (error) {
                res.status(500).json({ message: error.message });
        }
    });


const { buscarTodosUsuarios, criarUsuario, atualizarUsuario, buscarUsuarioPorId, deletarUsuario, buscarUsuarioPorEmail } = require ('./../services/usuarioService');
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');
const saltRounds = 10;

exports.listaUsuarios = (async (req, res) => {
        try {
                const usuarios = await buscarTodosUsuarios();
                res.json(usuarios);
        } catch (err) {
                res.status(500).json({ message: err.message });
        }
});

exports.createUsuario = (async (req, res) => {
try {
        const novoUsuario = await criarUsuario(req.body);
        res.status(201).json(novoUsuario);
} catch (error) {
        res.status(400).json({ message: error.message });
}
});

exports.readUsuario = (async (req, res) => {
        try {
                const usuario = await buscarUsuarioPorId(req.params.id);
                res.json(usuario);
        } catch (error) {
                res.status(400).json({ message: error.message });
        }
});

exports.updateUsuario = (async (req, res) => {
        try {
                const usuario = await atualizarUsuario(req.params.id, req.body);
                res.json(usuario);
        } catch (error) {
                res.status(400).json({ message: error.message });
        }
});

exports.deleteUsuario = (async (req, res) => {
        try {
                await deletarUsuario(req.params.id);
                res.json({ message: 'Usuário deletado com sucesso' });
        } catch (error) {
                res.status(500).json({ message: error.message });
        }
    });

exports.cadastroUsuario = (async (req, res) => {
        try {
                const { nome, email, senha } = req.body;
                const usuarioJaRegistrado = await buscarUsuarioPorEmail( email );

                if(usuarioJaRegistrado) {
                        res.status(409).json({message: "Email já registrado."});
                        return;
                }

                const senhaComHash = await bcrypt.hash(senha, saltRounds);

                const novoUsuario = await criarUsuario({ nome, email, senha: senhaComHash});

                const token = jwt.sign({ userId: novoUsuario._id }, 'token-hash-pampabooks', {
                expiresIn: '1h'});

                res.status(201).json({message: "Usuário criado com sucesso.", token: token});

        } catch (error) {
                res.status(400).json({ message: error.message });
        }
});

exports.loginUsuario = (async (req, res) => {
        try {
                const { email, senha } = req.body;
                const usuario = await buscarUsuarioPorEmail( email );

                if(!usuario) {
                        res.status(401).json({message: "Usuário informado não existe."});
                        return;
                }

                const comparaSenha = await bcrypt.compare(senha, usuario.senha);

                if (!comparaSenha) {
                        res.status(401).json({ error: "Senha incorreta."});
                        return;
                }

                const token = jwt.sign({ userId: usuario._id }, 'token-hash-pampabooks', {
                expiresIn: '1h'});
                res.status(200).json({ message: token });
        } catch (error) {
                res.status(500).json({ error: 'Login falhou: ' + error.message });
        }
});




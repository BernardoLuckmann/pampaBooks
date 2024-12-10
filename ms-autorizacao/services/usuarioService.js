const Usuario = require("../models/usuario");

const buscarTodosUsuarios = async () => {
    try {
        const usuarios = await Usuario.find();
        return usuarios;
    } catch (error) {
        throw new Error('Erro ao buscar usuários: ' + error.message);
    }
  };

const criarUsuario = async (usuario) => {
    try {
        const novoUsuario = new Usuario(usuario);
        const usuarioSalvo = await novoUsuario.save();
        return usuarioSalvo;
    } catch (error) {
        throw new Error('Erro ao criar usuário: ' + error.message);
    }
};

const atualizarUsuario = async (id, atualizacao) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(id, atualizacao)
        return usuario;
    } catch (error) {
        throw new Error('Erro ao atualizar usuário: ' + error.message);
    }
};

const buscarUsuarioPorId = async (id) => {
    try {
        const usuario = await Usuario.findById(id)
        return usuario;
    } catch (error) {
        throw new Error('Erro ao encontrar usuário: ' + error.message);
    }
};

const buscarUsuarioPorEmail = async (email) => {
    try {
        const usuario = await Usuario.findOne({email: email}).exec()
        return usuario;
    } catch (error) {
        throw new Error('Erro ao encontrar usuário: ' + error.message);
    }
};

const deletarUsuario = async (id) => {
    try {
        return await Usuario.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Erro ao encontrar usuário: ' + error.message);
    }
};

module.exports = {
    buscarTodosUsuarios,
    criarUsuario,
    atualizarUsuario,
    buscarUsuarioPorId,
    buscarUsuarioPorEmail,
    deletarUsuario
}

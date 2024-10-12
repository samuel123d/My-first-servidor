const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const usuarioMid = require('../midware/validarUsuario.midware');
const { Usuario } = require('../models');
/// ORM sistema que faz uma mapeamento chamado objeto relacional entre a aplicação e o banco de dados, nós dando funcionalidade para abstrair compexibilidade do banco de dados flexibilizando a aplicação, (sequelize)ORM.
router.post('/', usuarioMid);
router.put('/', usuarioMid);

router.get('/', async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json({ usuarios: usuarios });
});

router.get('/:id', async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id);
    res.json({ usuario: usuario });
});

router.post('/', async (req, res) => {
    const usuario = await Usuario.create(req.body);
    res.json({ msg: "Usuário adicionado com sucesso!" });
});

router.delete('/', async (req, res) => {
    const id = req.query.id;
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
        await usuario.destroy();
        res.json({ msg: "Usuário deletado com sucesso!" });
    } else {
        res.status(400).json({ msg: "Usuário não encontrado!" });
    }
});

router.put('/', async (req, res) => {
    const id = req.query.id;
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
        usuario.titulo = req.body.titulo;
        usuario.texto = req.body.texto;
        await usuario.save();
        res.json({ msg: "Usuário atualizado com sucesso!" });
    } else {
        res.status(400).json({ msg: "Usuário não encontrado!" });
    }
});

module.exports = router;

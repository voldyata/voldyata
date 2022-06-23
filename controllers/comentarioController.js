const Comentario = require('../models/Comentario')
const Usuario = require('../models/Usuario')
const Medicamento = require('../models/Medicamento')
const sequelize = require('sequelize')
const {
    Op
} = require('sequelize');

const comentarioController = {
    cadastrar: async (req, res) => {
        const {
            conteudo,
            medicamentoId,
            usuarioId
        } = req.body;
        const Res = await Comentario.create({
            conteudo,
            medicamentoId,
            usuarioId,
        })
        res.json(Res)
    },
    listar: async (req, res) => {
        const usuario = await Comentario.findAll({
            include: [{
                association: 'medicamento'
            }, {
                association: 'naturopatum'
            }]
        })
        res.json(usuario)
    },
    findbyid: async (req, res) => {
        const {id
} = req.params;
        const usuario = await Medicamento.findOne({
            where: {
                id: id
            },
            include: [{
                association: 'Comentarios',
                include: {
                    association: 'usuario'
                }
            }]
        })
        res.json(usuario)
    },
    eliminar: async (req, res) => {
        const {
            id
        } = req.params;
        const usuario = await Comentario.destroy({
            where: {
                id: id
            }
        })
        res.json(usuario)
    },

    atualizar: async (req, res) => {
        const {
            id,
            nome,
            email,
            senha,
        } = req.body;
        const usuario = await Comentario.update({
            nome,
            email,
            senha,
        }, {
            where: {
                id: id
            }
        })
        res.json(usuario)
    },
    findbynome: async (req, res) => {
        const {
            nome
        } = req.params;
        const usuario = await Comentario.findAll({
            where: {
                nome: {
                    [op.like]: '%nome%'
                }
            }
        })
        res.json(Usuario)
    },
}

module.exports = comentarioController;
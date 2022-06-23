const Avaliacao = require('../models/Avaliacao')
const Usuario = require('../models/Usuario')
const Medicamento = require('../models/Medicamento')
const sequelize = require('sequelize')
const {
    Op
} = require('sequelize');
const Naturopata = require('../models/Naturopata');

const avaliacaoController = {
    cadastrar: async (req, res) => {
        const {
            conteudo,
            naturopatumId,
            usuarioId
        } = req.body;
        const Res = await Avaliacao.create({
            conteudo,
            naturopatumId,
            usuarioId,
        })
        res.json(Res)
    },
    listar: async (req, res) => {
        const usuario = await Avaliacao.findAll({
            include: [{
                association: 'medicamento'
            }, {
                association: 'naturopatum'
            }]
        })
        res.json(usuario)
    },
    findbyid: async (req, res) => {
        const {
            id
        } = req.params;
        const usuario = await Naturopata.findOne({
            where: {
                id: id
            },
            include: [{
                association: 'avaliacaos',
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
        const usuario = await Avaliacao.destroy({
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
        const usuario = await Avaliacao.update({
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
        const usuario = await Avaliacao.findAll({
            where: {
                nome: {
                    [op.like]: '%nome%'
                }
            }
        })
        res.json(Usuario)
    },
}

module.exports = avaliacaoController;
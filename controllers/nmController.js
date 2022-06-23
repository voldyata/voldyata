const Nm = require('../models/Nm')
const Naturopata = require('../models/Naturopata')
const sequelize = require('sequelize')
const {
    Op
} = require('sequelize');

const usuarioController = {
    cadastrar: async (req, res) => {
        const {
            naturopatumId,
            medicamentoId
        } = req.body;
        const Res = await Nm.create({
            naturopatumId,
            medicamentoId,
        })
        res.json(Res)
    },
    listar: async (req, res) => {
        const usuario = await Nm.findAll({
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
                association: 'Nms',
                include: {
                    association: 'medicamento'
                }
            }]
        })
        res.json(usuario)
    },
    eliminar: async (req, res) => {
        const {
            id
        } = req.params;
        const usuario = await Usuario.destroy({
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
        const usuario = await Usuario.update({
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
        const usuario = await Usuario.findAll({
            where: {
                nome: {
                    [op.like]: '%nome%'
                }
            }
        })
        res.json(Usuario)
    },
}

module.exports = usuarioController;
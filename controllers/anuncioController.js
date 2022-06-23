const Anuncio = require('../models/Anuncio')

const sequelize = require('sequelize')
const {
    Op
} = require('sequelize');
const Naturopata = require('../models/Naturopata');

const anuncioController = {
    cadastrar: async (req, res) => {
        const Res = await Anuncio.create({
            conteudo: req.body.conteudo,
            naturopatumId: req.body.naturopatumId,
            imagem: req.file.filename
        })
        res.json(Res)
    },
    listar: async (req, res) => {
        const usuario = await Anuncio.findAll({
            include: [{
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
                association: 'anuncios'
            }]
        })
        res.json(usuario)
    },
    eliminar: async (req, res) => {
        const {
            id
        } = req.params;
        const usuario = await Anuncio.destroy({
            where: {
                id: id
            }
        })
        res.json(usuario)
    },

    atualizar: async (req, res) => {
        const {
            id,
            conteudo,
        } = req.body;
        const usuario = await Anuncio.update({
            conteudo,
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
        const usuario = await Anuncio.findAll({
            where: {
                nome: {
                    [op.like]: '%nome%'
                }
            }
        })
        res.json(Usuario)
    },
}

module.exports = anuncioController;
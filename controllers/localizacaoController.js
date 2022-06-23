const Localizacao = require('../models/Localizacao')
const Naturopata = require('../models/Naturopata')
const localizacaoControler = {

    cadastrarlo: async (req, res) => {
        const {
            naturopata_id
        } = req.parms;

        const {
            Provincia,
            Municipio,
            Bairro,
            Rua,
            Telefone,
        } = req.body;
        const naturopata = await Naturopata.findbyPk(naturopata_id);
        if (!naturopata) {
            return res.status(400).json({
                error: 'naturopata não encontrado'
            });
        }
        else {

        const localizacao = await Localizacao.create({
            Provincia,
            Municipio,
            Bairro,
            Rua,
            Telefone,
            naturopata_id
        })
        res.json(Localizacao)

    }
    },
    listar: async (req, res) => {
        const localizacao = await Localizacao.findAll({
            order: [
                ['id ', 'DESC']
            ],
            include: [{
                attributes: ['naturopata_id'],
                model: Naturopata
            }]

        })
        res.json(Localizacao)
    },
    atualizar: async (req, res) => {
        const {
            naturopata_id

        } = req.parms;

        const {

            Provincia,
            Municipio,
            Bairro,
            Rua,
            Telefone,

        } = req.body;
        const naturopata = await Naturopata.findbyPk(naturopata_id);
        if (!naturopata) {
            return res.status(400).json({
                error: 'naturopata não encontrado'
            });
        }
        const localizacao = await Localizacao.update({
            Provincia,
            Municipio,
            Bairro,
            Rua,
            Telefone,

        }, {
            where: {
                naturopata_id: naturopata_id
            }
        })

        res.json(naturopata)
    },
}
module.exports = localizacaoControler


const {
    where
} = require('sequelize');
const sequelize = require('sequelize')
const Medicamento = require('../models/Medicamento')
const naturopata = require('../models/Naturopata')

const medicamentoController = {
    cadastrar: async (req, res) => {
        const {

            nome,
            preco,
        } = req.body;

        const medicamento = await Medicamento.create({
            nome,
            preco,
        })
        res.json(medicamento)
    },


    listar: async (req, res) => {
        const medicamento = await Medicamento.findAll()
              const total = medicamento.length
        res.status(200).json({
            medicamento,
            total
        })
              
    },
    findbyid: async (req, res) => {
        const {
            id
        } = req.params;
        const medicamento = await Medicamento.findAll({
            where: {
                id: id


            }

        })
        res.json(medicamento)
    },
    eliminar: async (req, res) => {
        const {
            id
        } = req.params;
           const medicamento = await Medicamento.destroy({
               where: {
                   id: id
               }
           })
           try {
               res.status(200).send("Medicamento Apagado com sucesso");
           } catch (err) {
               res.status(500).send("Ocorreu um erro" + err)
           }
        res.json(medicamento)
    },

    atualizar: async (req, res) => {
          const selectUser = await Medicamento.findOne({
              where: {
                  id: req.body.id
              }
          })
          if (!selectUser) {
              return res.status(400).send("O medicamento não existe")
          }
        const {
            id,
            nome,
            preco,
        } = req.body;
        const medicamento = await Medicamento.update({
            nome,
            preco
        }, {
            where: {
                id: id
            }
        })
         try {
             res.status(200).send("Medicamento atualizado com sucesso");
         } catch (err) {
             res.status(500).send("Ocorreu um erro" + err)
         }

        res.json(medicamento)
    },
    findbynome: async (req, res) => {
      /*  const {nome} = req.params;
        const medicamento = await Medicamento.findAll({
            where: {
                nome: '%nome'
            }

        })*/

        const detalhe = await Medicamento.findOne({
            where: {
                nome: req.params.nome
            }
        })
        return res.status(200).json(detalhe)
    },

}


module.exports = medicamentoController;
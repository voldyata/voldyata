const db = require('./db')
const Naturopata = require('./Naturopata')
const Medicamento = db.sequelize.define('medicamento', {
    nome: {
        type: db.Sequelize.STRING,
        allownull: false,
        validate: {
            notEmpty: {
                msg: "esse campo não pode ser vazio"
            }
        }
    },
    preco: {
        type: db.Sequelize.FLOAT,
        defaultValue: "300",
        allownull: false,
        validate: {
            notEmpty: {
                msg: "esse campo não pode ficar em branco"
            }
        }
    }
})

//Medicamento.sync({ Force: true })

module.exports = Medicamento;
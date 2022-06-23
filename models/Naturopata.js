const db = require('./db.js');
const Bairro = require('./Bairro');

const Naturopata = db.sequelize.define('naturopata', {
    nome: {
        type: db.Sequelize.STRING,
        allownull: false,
        validate: {
            notEmpty: {
                msg: "esse campo não pode ser vazio"
            }
        }
    },
    email: {
        type: db.Sequelize.STRING,
        allownull: false,
        validate: {
            isEmail: {
                msg: "esse campo é um email"
            }
        },
        unique: true,
    },
    telefone: {
        type: db.Sequelize.CHAR,
        allownull: false,
        validate: {
            notEmpty: {
                msg: "esse campo não pode ser vazio"
            },
            len: {
                args: [9],
                msg: "deve conter entre   9 digitos"

            }
        },
    },

    imagem: {
        type: db.Sequelize.STRING
    },

})

Naturopata.belongsTo(Bairro, {
    constraint: true,
})

Bairro.hasMany(Naturopata) 
//Naturopata.sync({ alter: true})

module.exports = Naturopata;
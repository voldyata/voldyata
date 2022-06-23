const Municipio = require ('./Municipio')
const db = require('./db');

const Bairro = db.sequelize.define('Bairro', {
    nome: {
        type: db.Sequelize.STRING,
        allownull: false,
        validate: {
            notEmpty: {
                msg: "esse campo não pode ser vazio"
            }
        }
    
        
    }
})
Bairro.belongsTo(Municipio)




//Bairro.sync({ Force: true })

module.exports = Bairro;
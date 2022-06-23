const crypto = require('crypto')
const db = require('./db');

const Provincia = db.sequelize.define('Provincia', {
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




//Provincia.sync({ Force: true })

module.exports = Provincia;
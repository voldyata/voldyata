const Provincia = require ('./Provincia')
const db = require('./db');

const Municipio = db.sequelize.define('Municipio', {
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
Municipio.belongsTo(Provincia)




//Municipio.sync({ Force: true })

module.exports = Municipio;
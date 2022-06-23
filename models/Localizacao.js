const db = require('./db');
const Naturopata = require('./Naturopata');
const Localizacao = db.sequelize.define('localizacao', {


    Provincia: {
        type: db.Sequelize.STRING
    },
    Municipio: {
        type: db.Sequelize.STRING
    },
    Bairro: {
        type: db.Sequelize.STRING
    },
    Rua: {
        type: db.Sequelize.STRING
    },
    Telefone: {
        type: db.Sequelize.STRING
    },



})


Localizacao.belongsTo(Naturopata,
{
    constraint : true ,
 foreignKey: 'naturopata_id',
  
 });







//Localizacao.sync({ Force: true })

module.exports = Localizacao;
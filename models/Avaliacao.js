const db = require('./db');

const Naturopata = require('./Naturopata');
const Usuario = require('./Usuario')

const Avaliacao = db.sequelize.define('avaliacao', {
    conteudo: {
        type: db.Sequelize.STRING
    },
})
Avaliacao.belongsTo(Naturopata, {
    constraint: true
});
Avaliacao.belongsTo(Usuario, {
    constraint: true
});

Naturopata.hasMany(Avaliacao)

//Avaliacao.sync({
//Force: true
//})

module.exports = Avaliacao;
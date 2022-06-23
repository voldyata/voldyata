const db = require('./db');
const Medicamento = require('./Medicamento')
const Usuario = require('./Usuario')

const Comentario = db.sequelize.define('Comentario', {
    conteudo: {
        type: db.Sequelize.STRING
    },
})
Comentario.belongsTo(Medicamento, {
    constraint: true
});
Comentario.belongsTo(Usuario, {
    constraint: true
});

Medicamento.hasMany(Comentario)
//Comentario.sync({
//alter: true
//})

module.exports = Comentario;
db = require('./db')
const Naturopata = require('./Naturopata')
const Medicamento = require('./Medicamento')

const Nm = db.sequelize.define('Nm', {
  id: {
    type: db.Sequelize.INTEGER,
    allownull: false,
    autoIncrement: true,
    primaryKey: true
  }
})

Nm.belongsTo(Naturopata, {
  constraint: true,
})
Nm.belongsTo(Medicamento, {
  constraint: true,
})

Naturopata.hasMany(Nm, {
  constraint: true,
})
//Nm.sync({
// force: true
//})

module.exports = Nm;
const db = require('./db')
const usuario = require('./Usuario')


const Admin = db.sequelize.define('admin', {
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
        unique: true,

        validate: {
            isEmail: {
                msg: "esse campo deve ser correio eletronico"
            }
        }
    },
    senha: {
        type: db.Sequelize.CHAR,
        allownull: false,

        validate: {
            notEmpty: {
                msg: "esse campo não pode ser vazio"
            },
            len: {
                args: [6, 15],
                msg: "deve conter no minimo  6   caracters"

            }
        }
    },
    imagem: {
        type: db.Sequelize.STRING,


    }
})
Admin.belongsTo(usuario
    , {
    constraint: true,
})

//Admin.sync({ alter: true })

module.exports = Admin;

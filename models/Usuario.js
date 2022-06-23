const db = require('./db')

const Usuario = db.sequelize.define('usuario', {
    nome: {
        type: db.Sequelize.STRING,
        allownull: false,
        validate: {
            notEmpty : {
                msg :"esse campo não pode ser vazio"
            }
        }
    },
    email: {
        type: db.Sequelize.STRING,
        allownull: false,
        unique : true ,

        validate: {
            isEmail: {
                msg :"esse campo deve ser correio eletronico"
            }
        }
    },
    senha: {
        type: db.Sequelize.CHAR,
        allownull: false,

        validate: {
            notEmpty : {
                msg :"esse campo não pode ser vazio"
            },
            
        }
    },
       imagem: {
           type: db.Sequelize.STRING,
         
           
       },
       tipo_usuario :{
           type:db.Sequelize.ENUM('Admin','Paciente'),
           default:'paciente',
            allownull: false,
       },
})

//Usuario.sync({ alter: true })

module.exports = Usuario;


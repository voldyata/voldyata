const Admin = require('../models/Admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const  sequelize= require('sequelize')

const {
    Op
} = require('sequelize');


const adminController = {
    
    cadastrar: async (req, res) => {
         const selectUser = await Admin.findOne({
             where: { email: req.body.email}})
         if (selectUser) {
             return res.status(400).send("O email  já existe")
         }

        const admin = await Admin.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: bcrypt.hashSync (req.body.senha),
            imagem: req.file.filename
        })
        res.json(admin)
    },
    atualizar: async (req, res) => {
        const {
            id,
            nome,
            email,
            senha,

        } = req.body;
        const admin = await Admin.update({
            nome,
            email,
            senha,
  imagem: req.file.filename
        }, {
            where: {
                id: id
            }
        })

        res.json(admin)
    },
     login: async (req, res) => {

         const selectUser = await Admin.findOne({
             where: {
                 email: req.body.email
             }
         })
         if (!selectUser) {
             return res.status(200).json({
                 status: 3,
                 error: "Erro! Email incorrecto. Tente Novamente."
             })
         }

         const senhaAndEmail = bcrypt.compareSync(req.body.senha, selectUser.senha)
         if (!senhaAndEmail) {
             return res.status(200).json({
                 status: 2,
                 error: "Erro! Senha incorrecta. Tente Novamente."
             })
         }
         const token = jwt.sign({
             id: selectUser.id,
         }, process.env.TOKEN_SECRET)
         res.header('authorization-token', token)
         res.cookie('token', token, {
             httpOnly: true
         })
         res.status(200).json({
             status: 1,
             token: token,
             id: selectUser.id,
             nome: selectUser.nome,
             tipo_usuario: selectUser.tipo_usuario,
             imagem: selectUser.imagem
         });
     },
      checkToken: async (req, res) => {
              const token = req.body.token || req.query.token || req.cookies.token || req.headers['authorization-token'];
              if (!token) {
                  res.json({
                      status: 401,
                      msg: "Não autorizado: Token inexistente"
                  })
              } else {
                  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
                      if (err) {
                          res.json({
                              status: 401,
                              msg: "Não autorizado: Token inválido"
                          })
                      } else {
                          res.json({
                              status: 200
                          })
                      }
                  })
              }
          },
          logout: async (req, res) => {
              const token = req.headers.token;
              if (token) {
                  res.cookie('token', null, {
                      httpOnly: true
                  })
              } else {
                  res.status(401).send(" Logout Não autorizado")
              }
              res.send("Sessão finalizada com sucesso")
          },
}


module.exports = adminController;
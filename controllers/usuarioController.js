const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const sequelize = require('sequelize')

const {
    Op
} = require('sequelize');


const usuarioController = {

    cadastrar: async (req, res) => {
        const selectUser = await Usuario.findOne({
            where: {
                email: req.body.email
            }
        })
        if (selectUser) {
            return res.status(400).send("O email  já existe")
        }

        const usuario = await Usuario.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: bcrypt.hashSync(req.body.senha),
            imagem: req.file.filename,
            tipo_usuario: req.body.tipoUsuario
        })
        res.json(usuario)


    },


    listar: async (req, res) => {
        const usuario = await Usuario.findAll()
        const total = usuario.length
        return res.status(200).json({
            usuario,
            total
        })
    },
    findbyid: async (req, res) => {
        const {
            id
        } = req.params;
        const usuario = await Usuario.findAll({
            where: {
                id: id
            }
        })
        res.json(usuario)
    },
    eliminar: async (req, res) => {
        const {
            id
        } = req.params;
        const usuario = await Usuario.destroy({
            where: {
                id: id
            }
        })
        try {
            res.status(200).send("Usuário Apagado com sucesso");
        } catch (err) {
            res.status(500).send("Ocorreu um erro" + err)
        }
        res.json(usuario)
    },
    atualizar: async (req, res) => {
        const {
            id,
            nome,
            email,
            senha,

        } = req.body;
        const usuario = await Usuario.update({
            nome,
            email,
            senha,

        }, {
            where: {
                id: id
            }
        })

        res.json(usuario)
    },
    findbynome: async (req, res) => {
        const {
            nome
        } = req.params;
        const usuario = await Usuario.findAll({
            where: {
                nome: {
                    [op.like]: '%nome%'
                }



            }

        })
        res.json(Usuario)
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

    login: async (req, res) => {
        /*   const selectUser = await Usuario.findOne({
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
               imagem: selectUser.imagem
           }); */
        const selectedUser = await Usuario.findOne({
            where: {
                email: req.body.email
            }
        })
        if (!selectedUser) {
            return res.status(200).json({
                status: 2,
                error: "Usuario não encontrado"
            })
        }

        const passwordAndUserMatch = bcrypt.compareSync(req.body.senha, selectedUser.senha)
        if (!passwordAndUserMatch) {
            return res.status(200).json({
                status: 3,
                error: "Password errada"
            });
        }
        const token = jwt.sign({
            id: selectedUser.id,
            tipo_usuario: selectedUser.tipo_usuario,
            email: selectedUser.email,
            senha: selectedUser.senha,
            nome: selectedUser.nome
        }, process.env.TOKEN_SECRET)
        res.header('authoriztion-token', token)
        res.json({
            selectedUser,
            token
        })
    },

}


module.exports = usuarioController;
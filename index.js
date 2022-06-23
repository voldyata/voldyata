const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv').config()


const app = express()
const path = require('path')
const avaliacaoRoutes = require('./routers/avaliacaoRoutes')
const usuarioRoutes = require('./routers/usuarioRoutes')
const naturopataRoutes = require('./routers/naturopataRoutes')
const medicamentoRoutes = require('./routers/medicamentoRoutes')
const comentarioRoutes = require ('./routers/comentarioRoutes')
const nmRoutes = require ('./routers/nmRoutes')
const anuncioRoutes = require('./routers/anuncioRoutes')
const uploadUser = require('./mildwares/uploadimagem')
const admin = require('./routers/AdminRoutes')


const {
    dirname
} = require('path')
const Usuario = require('./models/Usuario')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.json());

app.use(cors());
app.use((req,res,next)=>{
    res.header("Acess-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods",'GET,POST,PUT,DELETE')
    app.use(cors());
    next();

})

app.post("/upload-image", uploadUser.single('image'), async (req, res) => {
    if(req.file){
 return res.json({
     erro: false,
     mensagem: "upload realizado com sucesso !"
 })
    }
    return res.status(400).json({
        erro: true,
        mensagem: "erro: upload não realizado com sucesso !"
    })
   
})
app.use("/usuario", usuarioRoutes)
app.use("/naturopata", naturopataRoutes)
app.use("/comentario", comentarioRoutes)
app.use("/medicamento", medicamentoRoutes)
app.use("/nm",nmRoutes)
app.use("/avaliacao",avaliacaoRoutes)
app.use("/anuncio",anuncioRoutes)
app.use("/admin",admin)


const PORT = 5000

app.listen(PORT, () => {
    console.log("servidor rodando na porta", PORT)
})
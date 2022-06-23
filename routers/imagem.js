 const express = require ('express') 
const app = express( );
app.post("/upload-image",async (req,res)=>{
    return res.status(400).json({
        erro : true ,
        mensagem:"erro: upload não realizado com sucesso !"
    })
    return res.json({
        erro : false ,
        mensagem :"upload realizado com sucesso !"
    })
})
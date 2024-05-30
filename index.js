const express=require('express');
const app=express();
const port = 3000;

const usurouter = require('./routes/histo_medico')

app.use('/histo_medico',usurouter)

app.get("/",(request,response)=>{
    response.send("Inicio pagina de mascotas")
})

app.listen(3000,function() { 
    console.log("Historial Medico");
})

const express=require('express');
const app=express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const usurouter = require('./routes/histo_medico')

app.use('/histo_medico',usurouter)

app.get("/",(request,response)=>{
    response.send("Inicio pagina de mascotas")
})

app.listen(3000,function() { //tiene que estar debajo de todo
    console.log("La app funciona");
})

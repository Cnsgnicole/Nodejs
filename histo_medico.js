const express = require('express');
const router = express.Router();


const histo_medico = [
    {id: "1", castrado:"Si", operado:"Si", discapacidad:"No", rabia:"No", enfermedades:"Ninguna", desparasitados:"Si"},
    {id: "2", castrado:"No", operado:"No", discapacidad:"Si", rabia:"No", enfermedades:"Ninguna", desparasitados:"Si"},
    {id: "3", castrado:"Si", operado:"No", discapacidad:"Si", rabia:"No", enfermedades:"Ninguna", desparasitados:"Si"}
] 
router.get("/",(req,res) => {
    res.json(histo_medico)
})

router.get("/:id",(req,res) => {
    const id = parseInt(req.params.dni);
    const histo_medico = histo_medico.find((histo_medico) => histo_medico.id===id);

    if(histo_medico){
        res.send(histo_medico);
    }else{
        res.status(404).send("Animal no encontrado");
    }
})

module.exports = router

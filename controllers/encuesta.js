const { response, json } = require('express')
const encuestas = require('../models/encuesta')


const getEncuesta = async (req, res = response) => {
    // const { nombre, raza, peso } = req.query
    const consulta = await encuestas.find()
    res.json({
        msg: 'GET API encuesta',
        consulta
    })
}


const postEncuesta = async (req, res) =>{
    const {nombreEncuesta,fecha,documentoEncuestado,nombreEncuestado,edad,genero,empleado} = req.body   

    const agregar = new encuestas({nombreEncuesta,fecha,documentoEncuestado,nombreEncuestado,edad,genero,empleado})

    await agregar.save()

    res.json({
        msg:"POST API ENCUESTA",
        agregar
    })
}

const deleteEncuesta = async (req,res) =>{

    const  { nombreEncuesta } = req.query
        const borrar = await encuestas.findOneAndDelete({nombreEncuesta : nombreEncuesta})

        res.json({
            msg: 'DELETE API ENCUESTA',
            borrar
        })
}


const putEncuesta = async (req,res)=>{
    const {nombreEncuesta,nombreNuevo,fecha,documentoEncuestado,nombreEncuestado,edad,genero,empleado} = req.body

    const modificar = await encuestas.findOneAndUpdate({nombreEncuesta:nombreEncuesta},{nombreEncuesta:nombreNuevo,fecha:fecha,documentoEncuestado:documentoEncuestado, nombreEncuestado:nombreEncuestado, edad:edad,genero:genero ,empleado:empleado })

    res.json({
        msg:"PUT APU ENCUESTA",
        modificar
    })
}


const patchEncuesta = async(req,res) =>{
    const{nombreEncuesta, edad} = req.body

    const modificarPatch = await encuestas.findOneAndUpdate({nombreEncuesta:nombreEncuesta}, {edad:edad})

    res.json({
        msg:"PATCH API ENCUESTA",
        modificarPatch
    })
}


module.exports ={
    getEncuesta,
    postEncuesta,
    deleteEncuesta,
    putEncuesta,
    patchEncuesta
}
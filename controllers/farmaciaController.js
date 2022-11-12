const { Medicamento } = require('../models/farmaciaModel')
const { validationResult } = require('express-validator')

//crear item en body
const crearMedicamento = async (req,res) => {
  try {
    const err = validationResult(req)
    if (err.isEmpty()) {
        const item = new Medicamento(req.body)
        await item.save()
        res.status(201).json({item})
    } else {
        res.status(501).json({err})
    }    
  } catch (error) {
    res.status(501).json({error})
  }
}
//ver los items
const verMedicamentos = async (req,res) => {
  const items = await Medicamento.find()
  res.status(200).json({items})
}
//ver 1 item determinado
const vistaMedicamento = async (req,res) => {
  const item = await Medicamento.findById(req.params.id)
  res.status(200).json({item})
}
//editar item determinado
const editarMedicamento = async (req,res) => {
  try {
      const err = validationResult(req)
      if (err.isEmpty()) {
        await Medicamento.findByIdAndUpdate(req.params.id, req.body)
        res.status(201).json({msg:'se actualizo el producto'})
    } else {
      res.status(501).json({err})
    }    
  } catch (error) {
    res.status(501).json({error})
  }
}
//eliminar item determinado
const eliminarMedicamento = async (req,res) => {
  const item = await Medicamento.findByIdAndDelete(req.params.id)
  res.status(204).json({item})
}
module.exports = { 
                    crearMedicamento,
                    verMedicamentos,
                    vistaMedicamento,
                    editarMedicamento,
                    eliminarMedicamento
                  }
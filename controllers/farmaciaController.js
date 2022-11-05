const { Medicamento } = require('../models/farmaciaModel')
//crear item en body
const crearMedicamento = async (req,res) => {
  try {
    const item = new Medicamento(req.body)
    await item.save()
    res.status(201).json({item})
  } catch (error) {
    res.status(501).json({error})
  }
}
//ver el item
const verMedicamento = async (req,res) => {
  const items = await Medicamento.find()
  res.status(200).json({items})
}

module.exports = { crearMedicamento, verMedicamento }
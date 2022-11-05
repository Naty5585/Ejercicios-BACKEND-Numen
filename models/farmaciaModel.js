const mongoose = require('mongoose')

const Schema = mongoose.Schema
const medicamentoSchema = new Schema({
  nombre:{
    type: String,
    required: true
  },
  laboratorio:{
    type: String,
    required: true
  },
  farmaco:{
    type: String,
    required: true
  },
  presentacion:{
    type: String,
    required: true
  },
  vencimiento:{
    type: Boolean,
    required: true
  },
  venta:{
    type: Boolean,
    required: true
  },
  precio:{
    type: Number,
    required: true
  },
  stock:{
    type: Number,
    required: true
  },
})

const Medicamento = mongoose.model('Medicamento', medicamentoSchema)
module.exports = { Medicamento }

//{
//  "nombre": "Doricoxib 120",
//  "laboratorio": "Roemmers",
//  "farmaco": "Etoricoxib",
//  "presentacion": "comprimidos recubiertos",
//  "vencimiento": true,
//  "venta": false,
//  "precio": 775,
//  "stock": 120
//}
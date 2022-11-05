//USUARIO SALUDO
const user = (req,res) => {
  res.send(`Hola ${req.params.nombre} ${req.params.apellido}, bienvenid@ al curso de node.js y express`)
}


module.exports = { user }
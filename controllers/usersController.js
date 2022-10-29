//USUARIO SALUDO
const user = (req,res) => {
  res.send(`Hola ${req.params.nombre} ${req.params.apellido}`)
}
//USUARIO ESTADO
const estateUser = (req,res) => {
  res.status().json({
    nombre: req.body.nombre,
    status: req.body.status
  })
}

module.exports = {user, estateUser}
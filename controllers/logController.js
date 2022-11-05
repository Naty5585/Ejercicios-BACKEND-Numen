const login = (req,res) => {
  res.status(200).json({
    nombre: req.body.nombre,
    status: req.body.status
  })
}

module.exports = { login }
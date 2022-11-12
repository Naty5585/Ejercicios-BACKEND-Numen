const app= require ('./app')
require('dotenv').config()

const port = process.env.PORT || 3000
// URL = http://localhost:3000
app.listen(port, () => {
  console.log(`Tarea cuatro de Backend, en puerto: ${port}`)
})
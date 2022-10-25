const express = require ('express') //guardamos express en una constante
const app = express() // asignamos express con una funcion
const port = 3000 // señalamos un puerto

//Crear una ruta que reciba nombre y apellido por medio de params (ruta parametrizada)
//y devuelva por un res.send un query string armando un saludo (ej: res.send(`Hola ${nombre}`) ).

app.get('/persona/:nombre/:apellido', (req,res)=> {
  res.send(`Hola ${req.params.nombre} ${req.params.apellido}`)
})

//Crear una ruta “dividir” la cual reciba dos parámetros (ruta parametrizada) divisor y 
//dividendo, la misma tiene que devolver un res.json({error: "no se puede dividir por cero"})
//si el usuario ingresa un 0, si no es el caso devolver res.json({resultado}).

app.get('/dividir/:dividendo/:divisor', (req,res)=> {

  let dividendo= Number(req.params.dividendo)
  let divisor= Number(req.params.divisor)
  let resultado = dividendo / divisor
  let error = 'no se puede dividir por cero'

  if (dividendo === 0 || divisor === 0){
    res.json({error})
  } else {
    res.json({resultado})
  }
})

//Crear una ruta que sume dos valores (ruta parametrizada), pero poner una condición de
//que no se puedan enviar números menores que cero, y el resultado se debe devolver por medio de un res.json({resultado}).

app.get('/sumar/:num1/:num2', (req,res) => {

  let num1= Number(req.params.num1)
  let num2= Number(req.params.num2)
  let resultado = num1 + num2
  let error = 'no se puede enviar cero como parametro'

  if (num1 === 0 || num2 === 0){
    res.json({error})
  } else {
    res.json({resultado})
  }
})

//Crear una ruta que reciba un numero (ruta con query) si el número es impar debe devolver
//un res.send("no autorizado") , y si el número es par debe devolver res.send("autorizado").

app.get('/parimpar', (req,res)=> {

  let numero = Number(req.query.numero)
  let par = 'Autorizado'
  let impar = 'No autorizado'

  if (numero % 2 === 0){
    res.json({par})
  } else {
    res.json({impar})
  }
})

//Crear una ruta “lista de compras” (ruta con query) que devuelva un objeto con 5
//productos, se debe usar res.json({objeto}).

app.get('/compras', (req,res) => {
  res.json({
    producto1:req.query.pro1,
    producto2:req.query.pro2,
    producto3:req.query.pro3,
    producto4:req.query.pro4,
    producto5:req.query.pro5,
  })
})











// method http get, URN
app.get('/', (req,res) => {
  //send es para contenido estatico
  res.send('Hello World')
})
app.get('/hola', (req,res) => {
  //send es para contenido estatico
  res.send('Holaaaaaaaaaaaa!!!!')
})

app.get('/alumnos', (req,res) => {
  //json lo utilizamos para enviar objetos
  res.json({
    alumno1:'Juan',
    alumno2:'Belen'
  })
})
//:num es un parametro q se envia
app.get('/alumnos/:num', (req,res) => {
  //json lo utilizamos para enviar objetos
  if (req.params.num == 1) {
    res.json({
        alumno1:'Juan',
        alumno2:'Belen'
  })
  } else {
    res.json({
      alumno1:'Naty',
      alumno2:'Pedro'
})
  }
})

app.get('/saludo/:nombre', (req,res) => {
  //json lo utilizamos para enviar objetos
  res.json({
    msg: "Hola como estas "  +  req.params.nombre
  })
})

app.get('/personas', (req,res) => {
  //para establecer querys ponemos la URN (en este caso persona) seguido de ?,
  //despues ponemos una clave y un valor (name=Naty)
  //& para poner mas querys
  //http://localhost:3000/persona?name=Naty&edad=37&alt=1.60&col=casta%C3%B1o
  //json lo utilizamos para enviar objetos
  console.log(req.query.name)
  res.json(req.query)
})

// URL = http://localhost:3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//SUMA
const sumar = (req,res) => {
  let num1= Number(req.params.num1)
  let num2= Number(req.params.num2)
  let resultado = num1 + num2
  let error = 'no se puede enviar números menores a cero como parametro'

  if (num1 < 0 || num2 < 0){
    res.json({error})
  } else {
    res.json({resultado})
  }
}
//DIVISION
const dividir = (req,res)=> {

  let dividendo= Number(req.params.dividendo)
  let divisor= Number(req.params.divisor)
  let resultado = dividendo / divisor
  let error = 'no se puede dividir por cero'

  if (dividendo === 0 || divisor === 0){
    res.json({error})
  } else {
    res.json({resultado})
  }
}
//PAR IMPAR
const parImpar = (req,res)=> {

  let numero = Number(req.query.numero)
  let par = 'Autorizado'
  let impar = 'No autorizado'

  if (numero % 2 === 0){
    res.json({par})
  } else {
    res.json({impar})
  }
}

module.exports = {sumar, dividir, parImpar}
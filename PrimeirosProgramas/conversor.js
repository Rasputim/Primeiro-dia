var valorDaMoeda = prompt("Por favor digite quantos R$ vale a unidade da moeda") 
alert("Um pouco mais...")
var valorEmDolarNumero = parseFloat(valorDaMoeda)
var valorParaConverter = prompt("Por favor digite quantos R$ você vai converter")
var valorEmReaisNumero = parseFloat(valorParaConverter)
var total = valorEmReaisNumero / valorEmDolarNumero
var totalDecimal = total.toFixed(2)
alert("você tem "+ totalDecimal +"Dolares")
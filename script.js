const nota1 = document.getElementById("nota1")
const nota2 = document.getElementById("nota2")
const resultado = document.getElementById("resultado")

const button = document.getElementById("button")

function CalculadoraMedia(){ 

    const Valornota1 = Number (nota1.value)
    const Valornota2 = Number (nota2.value)

    const media =(Valornota1 + Valornota2)/2
     

     resultado.innerText = `A média e ${media.toFixed(2)}`


}
button.addEventListener("click",CalculadoraMedia)
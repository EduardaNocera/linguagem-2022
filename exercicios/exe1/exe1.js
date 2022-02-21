function calcularsub(){
    // recupera os dados digitados pelo usuário
    // JS é não tipado => não se define o tipo da variável
    let number1 = document.getElementById("number1").value
    let subtrair = document.getElementById("subtrair").value
    // calcular o IMC
    let total = number1-subtrair
    // mostra o resultado para o usuário
    
    document.getElementById("total").innerHTML="O resultado é "+ total.toFixed(2)
    // duas casas depois da vírgula
}
function calcular(){

    let number1 = Number(document.getElementById("number1").value)
    let divisor = Number(document.getElementById("divisor").value)

    let total = number1/divisor

    document.getElementById("total").innerHTML="O resultado final é " + total.toFixed(2)

}
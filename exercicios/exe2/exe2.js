function calcularmul(){
    
    let number1 = Number(document.getElementById("1number").value)
    let number2 = Number(document.getElementById("2number").value)
    let number3 = Number(document.getElementById("3number").value)
    
        let total = number1*number2*number3
    

    document.getElementById("total").innerHTML= "A multiplicação dos 3 número é " + total.toFixed(2)
}
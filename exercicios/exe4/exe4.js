function calcular(){
    
    let nota1 = Number(document.getElementById("1nota").value)
    let nota2 = Number(document.getElementById("2nota").value)
    
    
        let total = (nota1*2)+(nota2*3)/3+2
    

    document.getElementById("total").innerHTML= "O resultado é " + total.toFixed(2)
}
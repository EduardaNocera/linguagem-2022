function calcular(){
    
    let peso = Number(document.getElementById("peso").value)

        let gramas = peso*1000

    document.getElementById("gramas").innerHTML= "O peso em gramas é " + gramas.toFixed(2)
}
function calcular(){
    
    let produto = Number(document.getElementById("produto").value)
    
        let desconto = produto*10/100
        let total = produto-desconto
    

    document.getElementById("total").innerHTML= "O valor do produto com o desconto é " + total.toFixed(2)
}
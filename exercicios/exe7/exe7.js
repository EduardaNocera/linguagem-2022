function calcular(){
    
    let peso = Number(document.getElementById("peso").value)
    
        let peso1 = peso*15/100
        let total1 = peso1+peso
        let peso2 = peso*20/100
        let total2 = peso2+peso
    

    document.getElementById("total").innerHTML= "Se engordar 15% o Seu peso é = " + total1 +
    " Se engordar 20% o Seu peso é = " + total2 

}
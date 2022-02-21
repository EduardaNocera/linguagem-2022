function calcular(){
    
    let lado = Number(document.getElementById("lado").value)
    
        let area = (lado*lado)
    
    document.getElementById("area").innerHTML= "A área do quadrado é " + area.toFixed(2)
}
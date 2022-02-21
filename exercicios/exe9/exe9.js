function calcular(){
    
    let basemaior = Number(document.getElementById("basemaior").value)
    let basemenor = Number(document.getElementById("basemenor").value)
    let altura = Number(document.getElementById("altura").value)
    
        let area = (basemaior+basemenor)*altura/2
    
    document.getElementById("area").innerHTML= "A área do trapézio é " + area.toFixed(2)
}
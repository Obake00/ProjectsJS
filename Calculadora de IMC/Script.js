function calcular(){
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let imc = peso / (altura ** 2); 

    // alert(`Seu IMC é ${imc.toFixed(2)}`)
    
    if(imc < 18.5){
        resultado = "Você está abaixo do peso"}
    else if(imc >= 18.5 && imc <= 25){
        resultado = "Você está no peso ideal"}
    else if(imc > 25 && imc <= 30){
        resultado = "Você está com SOBRE-PESO"}
    else if(imc > 30 && imc <= 40){
        resultado = "Você está com OBESIDADE"}
    else if(imc > 40){
        resultado = "Você está com OBESIDADE MÓRBIDA"}

    document.querySelector("p").innerHTML = `Seu IMC é ${imc.toFixed(2)} --> ${resultado}`;
}
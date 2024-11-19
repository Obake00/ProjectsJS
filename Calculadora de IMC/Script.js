function calcular(){
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let imc = peso / (altura ** 2); 

    alert("Seu IMC é: " + imc.toFixed(2))
    
    if(imc < 18.5){
        alert("Você está abaixo do peso")}
    else if(imc >= 18.5 && imc <= 25){
        alert("Você está no peso ideal")}
    else if(imc > 25 && imc <= 30){
        alert("Você está com sobre-peso")}
    else if(imc > 30 && imc <= 40){
        alert("Você está com OBESIDADE")}
    else if(imc > 40){
        alert("Você está com OBESIDADE MORBIDA")}
}
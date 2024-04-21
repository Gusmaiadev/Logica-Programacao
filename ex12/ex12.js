/*
Tendo como dados de entrada a altura de uma pessoa,
construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
*/


let altura = parseFloat(prompt("Digite sua altura: "))

let pesoIdeal = (72.7 * altura) - 58

console.log('Seu peso ideal é : ' + pesoIdeal)
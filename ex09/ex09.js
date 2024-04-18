/*
Faça um Programa que peça a temperatura em graus Farenheit, transforme e mostre a temperatura em graus Celsius. C = (5 * (F-32) / 9).
*/

let farenheit = parseFloat(prompt("Informe a temperatura em Farenheit: "))

let celsius = (5 * (farenheit-32) / 9)

console.log(`A temperatura em graus Celsius ficara ${celsius}°`)
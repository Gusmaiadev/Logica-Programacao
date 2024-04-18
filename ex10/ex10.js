/*
Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Farenheit.
*/

let celsius = parseFloat(prompt("Informe a temperatura em graus Celsius: "));

let fahrenheit = (9/5) * celsius + 32;

console.log(`A temperatura em Fahrenheit será: ${fahrenheit}°F`);

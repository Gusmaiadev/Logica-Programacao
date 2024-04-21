/*
Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre: o produto do dobro do primeiro com metade do segundo. 
a soma do triplo do primeiro com o terceiro. o terceiro elevado ao cubo.
*/

num1 = parseInt(prompt("Digite um número inteiro: "))
num2= parseInt(prompt("Digite outro número inteiro: "))
num3 = parseFloat(prompt("Digite um número real: "))

let resultUm = (num1 * 2) * (num2 / 2)
let resultDois = (num1 * 3) + num3
let resultTres = (num3 ** 3)


console.log(`O produto do dobro do primeiro com metade do segundo: ${resultUm}`)
console.log(`A soma do triplo do primeiro com o terceiro: ${resultDois}`)
console.log(`O terceiro elevado ao cubo: ${resultTres}`)



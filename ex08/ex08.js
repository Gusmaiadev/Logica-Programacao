/*
Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
*/

let salarioHora = parseFloat(prompt("Informe quanto você ganha por hora: "))
let horasTrabalhadas = parseInt(prompt("Informe as horas trabalhadas no mês: "))

let salarioTotal = salarioHora * horasTrabalhadas

console.log(`O salário total será: R$${salarioTotal}`)
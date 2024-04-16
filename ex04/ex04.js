// Faça um Programa que peça as 4 notas bimestrais e mostre a média.
let somaNotas = 0

for(let i = 1; i <= 4; i++){
    let notas = parseFloat(prompt(`Digite a ${i}° nota: `))
    somaNotas += notas
}

let media = somaNotas / 4

console.log(`A média do bimestre é ${media}`)
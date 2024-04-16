// Faça um Programa que peça dois números e imprima a soma.

let soma = 0

for(let i = 1; i <= 2; i++){
    let num = parseInt(prompt(`Digite o ${i}° número: `))
    soma += num
}

console.log(`A soma entre os números é ${soma}`)
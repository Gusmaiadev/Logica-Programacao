/*
Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
*/

let quadrado = parseFloat(prompt("Informe a base ou altura do quadrado: "))

let areaQuadrado = quadrado ** 2

let quadradoDobro = areaQuadrado * 2

console.log(`O dobro da área do quadrado é ${quadradoDobro}`)
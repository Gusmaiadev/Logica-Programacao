/*
Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, 
utilizando as seguintes fórmulas: Para homens: (72.7h) - 58 Para mulheres: (62.1h) - 44.7
*/




    altura = parseFloat(prompt("Digite sua altura: "))
    let opc = parseInt(prompt("Digite a opção desejada 1 - Mulher / 2 - Homem: "))

    if(opc == 1){
        let pesoIdeal = (62.1 * altura) - 44.7
        console.log("O seu peso ideal é: " + pesoIdeal)
    } else if(opc == 2){
        let pesoIdeal = (72.7 * altura) - 58
         console.log("O seu peso ideal é: " + pesoIdeal)
    }


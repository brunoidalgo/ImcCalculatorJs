let peso = 90;
let idade = 21; 
let altura = 1.83;

const imc = peso / (altura * altura);

function calculator() {
    if (imc < 18.5){
        console.log(`Seu imc é ${imc} Abaixo do peso`)
    } else if (imc >= 18.6 && imc <= 24.9) {
        console.log(`Seu imc é ${imc} Peso normal`)
    } else if(imc >= 25 && imc <= 29.9) {
        console.log(`Seu imc é ${Math.round(imc)} Pré-obesidade`)
    } else if(imc >= 30 && imc <= 34.9) {
        console.log(`Seu imc é ${math.round(imc)} Obesidade Grau I`)
    } else if (imc >= 35 && imc <= 39.9) {
        console.log(`Seu imc é ${math.round(imc)} Obesidade Grau II`)
    } else if (imc >= 40) {
        console.log(`Seu imc é ${math.round(imc)} Obesidade Grau III`)
    }
}

calculator();

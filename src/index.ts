import prompt from 'prompt-sync'


interface Calculator{
    add(number1:number, y:number):number;
    sub(number1:number, y:number):number;
    mult(number1:number, y:number):number;
    div(number1:number, y:number):number|string;
}


function checkNumber():number[]{
    let numbers: number[] = []
    let number: number = 0
    do{
        try {
            let inputNumber = promptInput("Digite um numero: ");
            if(!isNaN(number)){
                return true;
            }else{
                throw new TypeError();
            }
        } catch (e) {
            console.log("Não foi digitado um número.");
            return false;
        }
    }while(numbers.length < 2);
    
}

let calculator: Calculator = {
  
    add(number1:number, number2:number){
        return number1 + number2;
    },
    sub(number1:number, number2:number){
        return number1 - number2;
    },
    mult(number1:number, number2:number){
        return number1 * number2;
    },
    div(number1:number, number2:number){
        if(number2 == 0){
            return "Não existe divisão por 0";
        }else{ return number1 / number2}
    }

};


let promptInput = prompt();
let exit = 1;

do{
    let number1: number;
    let number2: number;

    console.log("----Calculadora----");
    try {
        let inputOperator = promptInput("Digite a operação(1-soma,2-subtração,3-multiplicação,4-divisão, 0-Sair): ");
        let operatorValue = Number(inputOperator);
        switch(operatorValue){
            case 0:{
                exit = 0;
                break;
            }
            case 1:{
                do{

                }
                let inputNumber = promptInput("Digite um numero: ");
                number1 = Number(inputNumber);

                inputNumber = promptInput("Digite outro numero: ");
                number2 = Number(inputNumber);
                if(checkNumber(number1)){
                    console.log("Resultado = ", calculator.add(number1,number2));
                }else{
                    console.log("Não foi possivel realizar o calculo.");
                }
                inputNumber = promptInput("Deseja continuar?(1-sim, 0-não) ");
                exit = Number(inputNumber);
                break;
            }
            case 2:{
                let inputNumber = promptInput("Digite um numero: ");
                number1 = Number(inputNumber);

                inputNumber = promptInput("Digite outro numero: ");
                number2 = Number(inputNumber);
                if(checkNumber(number1)){
                    console.log("Resultado = ", calculator.sub(number1,number2));
                }else{
                    console.log("Não foi possivel realizar o calculo.");
                }
                inputNumber = promptInput("Deseja continuar?(1-sim, 0-não) ");
                exit = Number(inputNumber);
                break;
            }
            case 3:{
                let inputNumber = promptInput("Digite um numero: ");
                number1 = Number(inputNumber);

                inputNumber = promptInput("Digite outro numero: ");
                number2 = Number(inputNumber);
                if(checkNumber(number1)){
                    console.log("Resultado = ", calculator.mult(number1,number2));
                }else{
                    console.log("Não foi possivel realizar o calculo.");
                }
                inputNumber = promptInput("Deseja continuar?(1-sim, 0-não) ");
                exit = Number(inputNumber);
                break;
            }
            case 4:{
                let inputNumber = promptInput("Digite um numero: ");
                number1 = Number(inputNumber);

                inputNumber = promptInput("Digite outro numero: ");
                number2 = Number(inputNumber);
                if(checkNumber(number1)){
                    console.log("Resultado = ", calculator.div(number1,number2));
                }else{
                    console.log("Não foi possivel realizar o calculo.");
                }
                inputNumber = promptInput("Deseja continuar?(1-sim, 0-não) ");
                exit = Number(inputNumber);
                break;
            }
            default:{
                throw new TypeError();
                break;
            }
        }
    } catch (e) {
        console.log("ERRO! Operador invalido.");
    }
  
}while(exit != 0);

import prompt from 'prompt-sync'

interface Calculator{
    add(x:number, y:number):number;
    sub(x:number, y:number):number;
    mult(x:number, y:number):number;
    div(x:number, y:number):number|string;
}

function checkNum(num1:number, num2:number){
    try {
        if(!isNaN(num1) && !isNaN(num2)){
            return true;
        }else{
            throw new TypeError();
        }
    } catch (e) {
        console.log("Não foi digitado um número.");
        return false;
    }
}

let calculator: Calculator = {
    add(x:number, y:number){
        return x + y;
    },
    sub(x:number, y:number){
        return x - y;
    },
    mult(x:number, y:number){
        return x * y;
    },
    div(x:number, y:number){
        if(y == 0){
            return "Não existe divisão por 0";
        }else{ return x / y}
    }
};

let pt = prompt();
let exit = 1;

do{
    let num1: number;
    let num2: number;

    console.log("----Calculadora----");
    try {
        let inputOp = pt("Digite a operação(1-soma,2-subtração,3-multiplicação,4-divisão, 0-Sair): ");
        let op = Number(inputOp);
        switch(op){
            case 0:{
                exit = 0;
                break;
            }
            case 1:{
                let inputNum = pt("Digite um numero: ");
                num1 = Number(inputNum);

                inputNum = pt("Digite outro numero: ");
                num2 = Number(inputNum);
                if(checkNum(num1, num2)){
                    console.log("Resultado = ", calculator.add(num1,num2));
                }else{
                    console.log("Não foi possivel realizar o calculo.");
                }
                inputNum = pt("Deseja continuar?(1-sim, 0-não) ");
                exit = Number(inputNum);
                break;
            }
            case 2:{
                let inputNum = pt("Digite um numero: ");
                num1 = Number(inputNum);

                inputNum = pt("Digite outro numero: ");
                num2 = Number(inputNum);
                if(checkNum(num1, num2)){
                    console.log("Resultado = ", calculator.sub(num1,num2));
                }else{
                    console.log("Não foi possivel realizar o calculo.");
                }
                inputNum = pt("Deseja continuar?(1-sim, 0-não) ");
                exit = Number(inputNum);
                break;
            }
            case 3:{
                let inputNum = pt("Digite um numero: ");
                num1 = Number(inputNum);

                inputNum = pt("Digite outro numero: ");
                num2 = Number(inputNum);
                if(checkNum(num1, num2)){
                    console.log("Resultado = ", calculator.mult(num1,num2));
                }else{
                    console.log("Não foi possivel realizar o calculo.");
                }
                inputNum = pt("Deseja continuar?(1-sim, 0-não) ");
                exit = Number(inputNum);
                break;
            }
            case 4:{
                let inputNum = pt("Digite um numero: ");
                num1 = Number(inputNum);

                inputNum = pt("Digite outro numero: ");
                num2 = Number(inputNum);
                if(checkNum(num1, num2)){
                    console.log("Resultado = ", calculator.div(num1,num2));
                }else{
                    console.log("Não foi possivel realizar o calculo.");
                }
                inputNum = pt("Deseja continuar?(1-sim, 0-não) ");
                exit = Number(inputNum);
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
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var Operator;
(function (Operator) {
    Operator[Operator["addiction"] = 1] = "addiction";
    Operator[Operator["subtraction"] = 2] = "subtraction";
    Operator[Operator["multiplication"] = 3] = "multiplication";
    Operator[Operator["division"] = 4] = "division";
})(Operator || (Operator = {}));
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.calculate = function (number1, number2, operator) {
        if (operator === 1) {
            return number1 + number2;
        }
        else if (operator === 2) {
            return number1 - number2;
        }
        else if (operator === 3) {
            return number1 * number2;
        }
        else {
            if (number2 == 0) {
                return "#ERROR#";
            }
            else {
                return number1 / number2;
            }
        }
    };
    Calculator.prototype.entryNumbers = function () {
        var numbers = [];
        var number = 0;
        do {
            try {
                var inputNumber = promptInput("Digite um numero: ");
                number = Number(this.validateNumber(inputNumber));
                if (!isNaN(number)) {
                    numbers[numbers.length] = number;
                }
                else {
                    throw new TypeError();
                }
            }
            catch (e) {
                console.log("Não foi digitado um número.");
            }
        } while (numbers.length < 2);
        return numbers;
    };
    Calculator.prototype.validateNumber = function (value) {
        var signal = '';
        var validValue = '';
        for (var id = 0; id < value.length; id++) {
            if (!(value[id] === '+' || value[id] === '-' || value[id] === '*' || value[id] === '/')) {
                validValue += value[id];
            }
            else {
                if (validValue !== '') {
                    break;
                }
                else {
                    signal += value[id];
                }
            }
        }
        if (signal.includes('-')) {
            validValue = '-' + validValue;
        }
        if (signal.length > 1) {
            console.log("Foram digitados dados estranhos, será recebido somente o primeiro dado valido digitado.\nDado recebido = " + validValue);
        }
        return validValue;
    };
    return Calculator;
}());
var calculator = new Calculator();
var operator = Operator;
var promptInput = (0, prompt_sync_1.default)();
var exit = 1;
do {
    var numbers = void 0;
    console.log("----Calculadora----");
    try {
        var inputOperator = promptInput("Digite a operação(1-soma,2-subtração,3-multiplicação,4-divisão, 0-Sair): ");
        var operatorValue = Number(inputOperator);
        switch (operatorValue) {
            case 0:
                {
                    exit = 0;
                    break;
                }
            case operator.addiction:
                {
                    numbers = calculator.entryNumbers();
                    console.log("Resultado = ", calculator.calculate(numbers[0], numbers[1], operator.addiction));
                    exit = Number(promptInput("Deseja continuar?(1-sim, 0-não) "));
                    break;
                }
            case operator.subtraction:
                {
                    numbers = calculator.entryNumbers();
                    console.log("Resultado = ", calculator.calculate(numbers[0], numbers[1], operator.subtraction));
                    exit = Number(promptInput("Deseja continuar?(1-sim, 0-não) "));
                    break;
                }
            case operator.multiplication:
                {
                    numbers = calculator.entryNumbers();
                    console.log("Resultado = ", calculator.calculate(numbers[0], numbers[1], operator.multiplication));
                    exit = Number(promptInput("Deseja continuar?(1-sim, 0-não) "));
                    break;
                }
            case operator.division:
                {
                    numbers = calculator.entryNumbers();
                    console.log("Resultado = ", calculator.calculate(numbers[0], numbers[1], operator.division));
                    exit = Number(promptInput("Deseja continuar?(1-sim, 0-não) "));
                    break;
                }
            default:
                {
                    throw new TypeError();
                    break;
                }
        }
    }
    catch (e) {
        console.log("ERRO! Operador invalido.");
    }
} while (exit != 0);
//----------------------------------------------------------------------------------------------------------------------//
/*function entryNumbers():number[]
{

    let numbers: number[] = []
    let number: number = 0

    do
    {
        try
        {
            let inputNumber = promptInput("Digite um numero: ");
            number = Number(validateNumber(inputNumber));

            if(!isNaN(number))
            {
                numbers[numbers.length] = number;
                //console.log(numbers.length + " | " + numbers[numbers.length - 1]);
            }else
            {
                throw new TypeError();
            }
        }
        catch (e)
        {
            console.log("Não foi digitado um número.");
        
        }
    }
    while(numbers.length < 2);

    return numbers;
}

function validateNumber(value: string){

    let signal: string = '';
    let validValue: string = '';
     
    for(let id = 0;id < value.length;id++){

        if(!(value[id] === '+' || value[id] === '-' || value[id] === '*' || value[id] === '/'))
        {
            validValue += value[id];
        }
        else
        {
            if(validValue !== '')
            {
                break;
            }
            else
            {
                signal += value[id];
            }
        }

    }

    if(signal.includes('-'))
    {
        validValue = '-' + validValue;
    }

    if(signal.length > 1){
        console.log("Foram digitados dados estranhos, será recebido somente o primeiro dado valido digitado.\nDado recebido = " + validValue);
    }

    return validValue;
}*/

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = __importDefault(require("prompt-sync"));
function checkNum(num1, num2) {
    try {
        if (!isNaN(num1) && !isNaN(num2)) {
            return true;
        }
        else {
            throw new TypeError();
        }
    }
    catch (e) {
        console.log("Não foi digitado um número.");
        return false;
    }
}
var calculator = {
    add: function (x, y) {
        return x + y;
    },
    sub: function (x, y) {
        return x - y;
    },
    mult: function (x, y) {
        return x * y;
    },
    div: function (x, y) {
        if (y == 0) {
            return "Não existe divisão por 0";
        }
        else {
            return x / y;
        }
    }
};
var pt = (0, prompt_sync_1.default)();
var exit = 1;
do {
    var num1 = void 0;
    var num2 = void 0;
    console.log("----Calculadora----");
    try {
        var inputOp = pt("Digite a operação(1-soma,2-subtração,3-multiplicação,4-divisão, 0-Sair): ");
        var op = Number(inputOp);
        switch (op) {
            case 0: {
                exit = 0;
                break;
            }
            case 1: {
                var inputNum = pt("Digite um numero: ");
                num1 = Number(inputNum);
                inputNum = pt("Digite outro numero: ");
                num2 = Number(inputNum);
                if (checkNum(num1, num2)) {
                    console.log("Resultado = ", calculator.add(num1, num2));
                }
                else {
                    console.log("Não foi possivel realizar o calculo.");
                }
                inputNum = pt("Deseja continuar?(1-sim, 0-não) ");
                exit = Number(inputNum);
                break;
            }
            case 2: {
                var inputNum = pt("Digite um numero: ");
                num1 = Number(inputNum);
                inputNum = pt("Digite outro numero: ");
                num2 = Number(inputNum);
                if (checkNum(num1, num2)) {
                    console.log("Resultado = ", calculator.sub(num1, num2));
                }
                else {
                    console.log("Não foi possivel realizar o calculo.");
                }
                inputNum = pt("Deseja continuar?(1-sim, 0-não) ");
                exit = Number(inputNum);
                break;
            }
            case 3: {
                var inputNum = pt("Digite um numero: ");
                num1 = Number(inputNum);
                inputNum = pt("Digite outro numero: ");
                num2 = Number(inputNum);
                if (checkNum(num1, num2)) {
                    console.log("Resultado = ", calculator.mult(num1, num2));
                }
                else {
                    console.log("Não foi possivel realizar o calculo.");
                }
                inputNum = pt("Deseja continuar?(1-sim, 0-não) ");
                exit = Number(inputNum);
                break;
            }
            case 4: {
                var inputNum = pt("Digite um numero: ");
                num1 = Number(inputNum);
                inputNum = pt("Digite outro numero: ");
                num2 = Number(inputNum);
                if (checkNum(num1, num2)) {
                    console.log("Resultado = ", calculator.div(num1, num2));
                }
                else {
                    console.log("Não foi possivel realizar o calculo.");
                }
                inputNum = pt("Deseja continuar?(1-sim, 0-não) ");
                exit = Number(inputNum);
                break;
            }
            default: {
                throw new TypeError();
                break;
            }
        }
    }
    catch (e) {
        console.log("ERRO! Operador invalido.");
    }
} while (exit != 0);

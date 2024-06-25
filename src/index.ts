import prompt from 'prompt-sync';
import { Calculator } from './util/Calculator';
import { Operator } from './util/Calculator';

let promptInput = prompt();

let calculator: Calculator = new Calculator()

let operator = Operator;

let exit = 1;

do
{
    let numbers: number[];

    console.log("----Calculadora----");

    try 
    {
        let inputOperator = promptInput("Digite a operação(1-soma,2-subtração,3-multiplicação,4-divisão, 0-Sair): ");

        let operatorValue = Number(inputOperator);

        switch(operatorValue){
            case 0:
            {
                exit = 0;
                break;
            }
            case operator.addiction:
            {
                numbers = calculator.entryNumbers();
                    
                console.log("Resultado = ", calculator.calculate(numbers[0],numbers[1], operator.addiction));

                exit = Number(promptInput("Deseja continuar?(1-sim, 0-não) "));

                break;
            }
            case operator.subtraction:
            {
                numbers = calculator.entryNumbers();
                    
                console.log("Resultado = ", calculator.calculate(numbers[0],numbers[1], operator.subtraction));

                exit = Number(promptInput("Deseja continuar?(1-sim, 0-não) "));

                break;
            }
            case operator.multiplication:
            {
                numbers = calculator.entryNumbers();
                    
                console.log("Resultado = ", calculator.calculate(numbers[0],numbers[1], operator.multiplication));

                exit = Number(promptInput("Deseja continuar?(1-sim, 0-não) "));

                break;
            }
            case operator.division:
            {
                numbers = calculator.entryNumbers();
                    
                console.log("Resultado = ", calculator.calculate(numbers[0],numbers[1], operator.division));

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
    catch (e) 
    {
        console.log("ERRO! Operador invalido.");
    }
  
}
while(exit != 0);

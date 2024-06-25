import prompt from 'prompt-sync'

export enum Operator {
    addiction = 1,
    subtraction,
    multiplication,
    division
}

export class Calculator {

    calculate(number1:number, number2:number, operator: Operator){
        if(operator === 1){
            return number1 + number2;
        }
        else if(operator === 2)
        {
            return number1 - number2;
        }
        else if(operator === 3)
        {
            return number1 * number2;
        }
        else
        {
            if(number2 == 0)
            {
                return "Não existe divisão por zero.";
            }
            else
            { 
                return number1 / number2;
            }
        }
    }

    entryNumbers():number[]
    {
        let promptInput = prompt();

        let numbers: number[] = []

        do
        {
            try 
            {
                let inputNumber = promptInput("Digite um numero: ");
                let number = Number(this.validateNumber(inputNumber));

                if(!isNaN(number))
                {
                    numbers[numbers.length] = number;
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

    validateNumber(value: string){

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
    }
}

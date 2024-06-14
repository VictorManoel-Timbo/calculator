interface Calculator{
    add(x:number, y:number):number;
    sub(x:number, y:number):number;
    mult(x:number, y:number):number;
    div(x:number, y:number):number|string;
}

let calculadora: Calculator = {
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
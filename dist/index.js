"use strict";
var calculadora = {
    soma: function (x, y) {
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

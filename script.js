function add(num1, num2) {
return num1 + num2;
}

function subtract(num1, num2) {
return num1 - num2;
}

function divide(num1, num2) {
return num1 / num2;
}

function multiply(num1, num2) {
return num1 * num2;
}

function power (num1, num2) {
return Math.pow(num1, num2);
}

function root (num1) {
return Math.sqrt(num1);
}

function operate(num1, operator, num2 = 1) {
switch(operator) {
    case '+':
        return add(num1,num2);

    case '-':
        return subtract(num1,num2);

    case 'x':
        return multiply(num1,num2);

    case '÷':
        return divide(num1,num2);

    case '^':
        return power(num1, num2);

    case '√':
        return root(num1);

    default:
        console.log('error');
        break;

}
}

let num1;
let operator;
let num2;



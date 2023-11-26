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

    default:
        console.log('error (from operate function lol)');
        break;

}
}

function splitEquation(equation) {
    if (equation.textContent.search(/-/) != 0 ) {
    let arr = equation.textContent.split(/[+\-x÷^]/);
    arr.splice(1, 0, equation.textContent[equation.textContent.search(/[+\-x÷^]/)]);
    return arr;
    }
    else {
        let tempArr = equation.textContent.split('');
        tempArr.splice(0,1);
        let equationHolder = tempArr.join('');
        let arr = equationHolder.split(/[+\-x÷^]/);
        arr.splice(1, 0, equationHolder[equationHolder.search(/[+\-x÷^]/)]);
        arr[0] = '-' + arr[0]
        return arr;
    }
   }

function fixLength(answer) {
    answer = Math.round(answer * 1000) /1000
    return answer;
}


const currentEquation = document.querySelector('#current-equation');
const lastEquation = document.querySelector('#last-equation');

const numberButtonsNodes = document.querySelectorAll('.number-button');
const operatorButtonsNodes = document.querySelectorAll('.operator-button');
const rootButton = document.querySelector('.root-button');
const dotButton = document.querySelector('.dot-button');
const clearButton = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const equalButton = document.querySelector('#equal');

let operateAnswer;

// assigning events to buttons
for (let i = 0; i < numberButtonsNodes.length; i++){
numberButtonsNodes[i].addEventListener('click', () => {
        if (currentEquation.textContent.length < 23) {
            currentEquation.textContent += numberButtonsNodes[i].id;
        }
    });
}

for (let i = 0; i < operatorButtonsNodes.length; i++){
    operatorButtonsNodes[i].addEventListener('click', () => {
        if (currentEquation.textContent.length < 22 &&
            currentEquation.textContent.length > 0 &&
            (currentEquation.textContent.search(/[+\-x÷^]/) === -1 || currentEquation.textContent === operateAnswer.toString())
            ) {
            currentEquation.textContent += operatorButtonsNodes[i].id;
        }
    });
}

rootButton.addEventListener('click', () => {
    if (currentEquation.textContent.length < 22 &&
        currentEquation.textContent.length > 0 &&
        currentEquation.textContent.search(/[+\-x÷^]/) === -1
        ) {
        currentEquation.textContent += '^0.5';
    }
});

dotButton.addEventListener('click', () => {
    if (currentEquation.textContent.length < 22 &&
        currentEquation.textContent.length > 0 &&
        currentEquation.textContent.search(/\./) === -1
        ) {
        currentEquation.textContent += dotButton.id;
    }
});

clearButton.addEventListener('click', () => {
    currentEquation.textContent = '';
});
clearButton.addEventListener('dblclick', () => {
    lastEquation.textContent = '';
});

backspace.addEventListener('click', () => {
    if (currentEquation.textContent.length > 0) {
    let arr = currentEquation.textContent.split('');
    arr.pop();
    let str = arr.join('');
    currentEquation.textContent = str;
    }
});

equalButton.addEventListener('click', () => {
    let arr = splitEquation(currentEquation);
    if (arr.every(currentValue => {return (currentValue != '' && currentValue != undefined)})) {
        lastEquation.textContent = (currentEquation.textContent);
        operateAnswer = operate(+arr[0], arr[1], +arr[2]);
        currentEquation.textContent = fixLength(operateAnswer);
        lastEquation.textContent += ('=' + fixLength(operateAnswer))
    }

    //if ()
})



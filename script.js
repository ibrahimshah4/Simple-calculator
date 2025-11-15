// Select the display
const display = document.querySelector('.display');

// Select number buttons (0-9)
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');

// Select operator buttons
const btnPlus = document.getElementById('btnPlus');
const btnMinus = document.getElementById('btnMinus');
const btnMultiply = document.getElementById('btnMultiply');
const btnDivide = document.getElementById('btnDivide');
const btnEqual = document.getElementById('btnEqual');

// Select utility buttons
const btnClear = document.querySelector('.btnClear');
const btnDel = document.querySelector('.delBtn');
const btnPoint = document.getElementById('btnPoint');

// Initialize calculator state variables
let currentInput = '';    // Current number being entered
let previousInput = '';   // Previous number stored
let operator = '';        // Current operator (+, -, *, /)

console.log('Calculator initialized!');

function updateDisplay() {
    if (previousInput !== '' && operator !== '' && currentInput !== '') {
        display.textContent = `${previousInput} ${operator} ${currentInput}`;
    } else if (previousInput !== '' && operator !== '') {
        display.textContent = `${previousInput} ${operator}`;
    } else if (currentInput !== '') {
        display.textContent = currentInput;
    } else {
        display.textContent = '0';
    }
}


// updateDisplay('0');

function handleNumberClick(number) {
    currentInput += number;
    updateDisplay();
}

btn0.addEventListener('click', function(){
    handleNumberClick('0');
});

btn1.addEventListener('click', function(){
    handleNumberClick('1');
});

btn2.addEventListener('click', function(){
    handleNumberClick('2');
});

btn3.addEventListener('click', function(){
    handleNumberClick('3');
});

btn4.addEventListener('click', function(){
    handleNumberClick('4');
});

btn5.addEventListener('click', function(){
    handleNumberClick('5');
});

btn6.addEventListener('click', function(){
    handleNumberClick('6');
});

btn7.addEventListener('click', function(){
    handleNumberClick('7');
});

btn8.addEventListener('click', function(){
    handleNumberClick('8');
});

btn9.addEventListener('click', function(){
    handleNumberClick('9');
});


btnPoint.addEventListener('click', function(){
    if (currentInput.includes('.')) {
        return;
    } else if (currentInput === ''){
        currentInput = '0.';
    } else {
        currentInput += '.';
    }
    updateDisplay();
});


function handleOperator(op){
    if(currentInput === '' && previousInput === ''){
        return;
    }

    if(previousInput !== '' && operator !== ''){
        calculate();
    }

    
    operator = op;

    if(currentInput !== '') {
        previousInput = currentInput;
        currentInput = '';
    };
    

    updateDisplay();
}

btnPlus.addEventListener('click', function(){
    handleOperator('+');
});

btnMinus.addEventListener('click', function(){
    handleOperator('-');
});

btnMultiply.addEventListener('click', function(){
    handleOperator('*');
});

btnDivide.addEventListener('click', function(){
    handleOperator('/');
});


function calculate(){
    if(previousInput === '' || currentInput === '' || operator === '') {
        return;
    }

    let  num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);
    let result;

    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        
        case '-':
            result = num1 - num2;
            break;
        
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if(num2 === 0){
                alert("Error: Division by zero");
                clearCalculator();
                return;
            }

            result = num1/num2;
            break;
        
        default:
            return;
    }

result = Math.round(result*100000000) / 100000000;

currentInput = result.toString();
previousInput = '';
operator = '';

updateDisplay();
}

btnEqual.addEventListener('click', function(){
    calculate();
});

function clearCalculator(){
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay()
}

btnClear.addEventListener('click', function(){
    clearCalculator();
});

function deleteLastChar(){
    if(currentInput === '') {
        return;
    }

    currentInput = currentInput.slice(0, -1);

    updateDisplay();
};

btnDel.addEventListener('click', function(){
    deleteLastChar();
});

updateDisplay();
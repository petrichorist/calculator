'use strict';

const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};
const divide = function (a, b) {
  return a / b;
};
const multiply = function (a, b) {
  return a * b;
};

function operate(numA, operator, numB) {
  if (operator === '÷' && numB === 0) {
    return '(:';
  }

  if (operator == '+') {
    return parseFloat(add(numA, numB).toFixed(2));
  } else if (operator === '-') {
    return parseFloat(subtract(numA, numB).toFixed(2));
  } else if (operator === '÷') {
    return parseFloat(divide(numA, numB).toFixed(2));
  } else if (operator === '×') {
    return parseFloat(multiply(numA, numB).toFixed(2));
  } else {
    return '';
  }
}

function numEnabler(bool) {
  for (let i = 0; i <= 9; i++) {
    document.getElementById('btn' + i).disabled = bool;
  }
}

function opEnabler(bool) {
  document.getElementById('+').disabled = bool;
  document.getElementById('-').disabled = bool;
  document.getElementById('×').disabled = bool;
  document.getElementById('÷').disabled = bool;
}

function decEnabler(bool) {
  document.getElementById('dec').disabled = bool;
}

let calculator = document.querySelector('.calculator');
let output = document.querySelector('#output');
let miniOutput = document.querySelector('#miniOutput');
let numStorage = '';
let num1 = '';
let num2 = '';
let currentOperator;
let result;

const choice = document.addEventListener('click', e => {
  let number = e.target.textContent;

  if (number === '0') {
    numStorage += number;
    output.textContent = numStorage;
  } else if (number === '1') {
    numStorage += number;
    output.textContent = numStorage;
  } else if (number === '2') {
    numStorage += number;
    output.textContent = numStorage;
  } else if (number === '3') {
    numStorage += number;
    output.textContent = numStorage;
  } else if (number === '4') {
    numStorage += number;
    output.textContent = numStorage;
  } else if (number === '5') {
    numStorage += number;
    output.textContent = numStorage;
  } else if (number === '6') {
    numStorage += number;
    output.textContent = numStorage;
  } else if (number === '7') {
    numStorage += number;
    output.textContent = numStorage;
  } else if (number === '8') {
    numStorage += number;
    output.textContent = numStorage;
  } else if (number === '9') {
    numStorage += number;
    output.textContent = numStorage;
  } else if (number === '.') {
    decEnabler(true);
    numStorage += number;
    output.textContent = numStorage;
  }

  if (number === '+') {
    numEnabler(false);
    opEnabler(true);
    decEnabler(false);
    currentOperator = '+';
    miniOutput.textContent = '';
    miniOutput.textContent += numStorage;
    miniOutput.textContent += currentOperator;
    num1 = numStorage;
    num2 = num1;
    numStorage = '';
  } else if (number === '-') {
    numEnabler(false);
    opEnabler(true);
    decEnabler(false);
    currentOperator = '-';
    miniOutput.textContent = '';
    miniOutput.textContent += numStorage;
    miniOutput.textContent += currentOperator;
    num1 = numStorage;
    numStorage = '';
  } else if (number === '×') {
    numEnabler(false);
    opEnabler(true);
    decEnabler(false);
    currentOperator = '×';
    miniOutput.textContent = '';
    miniOutput.textContent += numStorage;
    miniOutput.textContent += currentOperator;
    num1 = numStorage;
    numStorage = '';
  } else if (number === '÷') {
    numEnabler(false);
    opEnabler(true);
    decEnabler(false);
    currentOperator = '÷';
    miniOutput.textContent = '';
    miniOutput.textContent += numStorage;
    miniOutput.textContent += currentOperator;
    num1 = numStorage;
    numStorage = '';
  }

  console.log('num1: ' + num1);
  console.log('num2: ' + num2);
  console.log('numStorage: ' + numStorage);

  if (number === '=') {
    numEnabler(false);
    opEnabler(false);
    decEnabler(false);
    if (numStorage === '') {
      num2 = num1;
    } else {
      num2 = numStorage;
    }
    result = operate(
      parseFloat(num1, 10),
      currentOperator,
      parseFloat(num2, 10)
    );
    numStorage = result;
    miniOutput.textContent += num2 + '=';
    output.textContent = numStorage;
    numStorage = '';
    currentOperator = '';
    num2 = '';
  }

  console.log(numStorage);

  if (number === 'AC') {
    numEnabler(false);
    opEnabler(false);
    decEnabler(false);
    numStorage = '';
    output.textContent = '0';
    miniOutput.textContent = '';
  }

  if (number === 'C') {
    numEnabler(false);
    opEnabler(false);
    decEnabler(false);
    numStorage = numStorage.slice(0, -1);
    output.textContent = numStorage;
  }

  if (number === '💥') {
    calculator.classList.add('hidden');
  }

  if (number === '+/-') {
    if (numStorage[0] === '-') {
      numStorage = numStorage.slice(1);
    } else {
      numStorage = '-' + numStorage;
    }
    output.textContent = numStorage;
  }

  if (numStorage.length === 9) {
    numEnabler(true);
    decEnabler(true);
  }
});

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
  if (operator === '/' && numB === 0) {
    return '(:';
  }

  if (operator == '+') {
    return parseFloat(add(numA, numB).toFixed(2));
  } else if (operator === '-') {
    return parseFloat(subtract(numA, numB).toFixed(2));
  } else if (operator === '/') {
    return parseFloat(divide(numA, numB).toFixed(2));
  } else if (operator === '*') {
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
  document.getElementById('*').disabled = bool;
  document.getElementById('/').disabled = bool;
}

let calculator = document.querySelector('.calculator');
let output = document.querySelector('#output');
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
    numStorage += number;
    output.textContent = numStorage;
  }

  if (number === '+') {
    numEnabler(false);
    opEnabler(true);
    num1 = numStorage;
    currentOperator = '+';
    output.textContent += currentOperator;
    numStorage = '';
  } else if (number === '-') {
    numEnabler(false);
    opEnabler(true);
    num1 = numStorage;
    currentOperator = '-';
    output.textContent += currentOperator;
    numStorage = '';
  } else if (number === '*') {
    numEnabler(false);
    opEnabler(true);
    num1 = numStorage;
    currentOperator = '*';
    output.textContent += currentOperator;
    numStorage = '';
  } else if (number === '/') {
    numEnabler(false);
    opEnabler(true);
    num1 = numStorage;
    currentOperator = '/';
    output.textContent += currentOperator;
    numStorage = '';
  }

  if (number === '=') {
    numEnabler(false);
    opEnabler(false);
    num2 = numStorage;
    result = operate(
      parseFloat(num1, 10),
      currentOperator,
      parseFloat(num2, 10)
    );
    numStorage = result;
    output.textContent = numStorage;
    currentOperator = '';
    num2 = '';
  }

  if (number === 'AC') {
    numEnabler(false);
    numStorage = '';
    output.textContent = numStorage;
    output.style.fontSize = '60px';
  }

  if (number === 'C') {
    numEnabler(false);
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

  if (numStorage.length === 8) {
    numEnabler(true);
  }
});

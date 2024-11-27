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
  if (operator == '+') {
    return add(numA, numB);
  } else if (operator === '-') {
    return subtract(numA, numB);
  } else if (operator === '/') {
    return divide(numA, numB);
  } else if (operator === 'x') {
    return multiply(numA, numB);
  }
}

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
  }

  if (number === '+') {
    num1 = numStorage;
    currentOperator = '+';
    output.textContent += currentOperator;
    numStorage = '';
  } else if (number === '-') {
    num1 = numStorage;
    currentOperator = '-';
    output.textContent += currentOperator;
    numStorage = '';
  } else if (number === 'x') {
    num1 = numStorage;
    currentOperator = 'x';
    output.textContent += currentOperator;
    numStorage = '';
  } else if (number === '/') {
    num1 = numStorage;
    currentOperator = '/';
    output.textContent += currentOperator;
    numStorage = '';
  }

  if (number === '=') {
    num2 = numStorage;
    result = operate(parseFloat(num1), currentOperator, parseFloat(num2));
    numStorage = result;
    output.textContent = numStorage;
    currentOperator = '';
    num2 = '';
  }

  if (number === 'AC') {
    numStorage = '';
    output.textContent = numStorage;
  }

  if (number === 'C') {
    numStorage = numStorage.slice(0, -1);
    output.textContent = numStorage;
  }
});

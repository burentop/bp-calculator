let currentDisplay = "";
let operator = "";
let operatorValue = 0;
let totalValue = 0;

function handleNumberKey(event) {
  display.textContent += event.target.value;
  currentDisplay += event.target.value;
}

function handleOperatorKey(event) {
  operatorValue = parseFloat(currentDisplay);
  operator = event.target.value;
  totalValue = operate(operator, totalValue, operatorValue);
  currentDisplay = "";
  display.textContent = '';
}

function handleEqualsKey(event) {
  operatorValue = parseFloat(currentDisplay);
  totalValue = operate(operator, totalValue, operatorValue);
  display.textContent = totalValue;
  currentDisplay = "";
  operator = "";
  operatorValue = 0;
  totalValue = 0;
}

function handleClearKey(event) {
  display.textContent = "";
}

const keys = document.querySelector('.keys');

const display = document.querySelector('#display');
display.textContent = '';

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
  number.addEventListener('click', handleNumberKey, true);
});

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
  operator.addEventListener('click', handleOperatorKey, true);
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', handleEqualsKey, true);

const clear = document.querySelector('#clear');
clear.addEventListener('click', handleClearKey, true);

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
      break;
    case '-':
      return subtract(num1, num2);
      break;
    case '*':
      return multiply(num1, num2);
      break;
    case '/':
      return divide(num1, num2);
      break;
    default:
      return `${operator} is not a valid operator.`;
  }
}




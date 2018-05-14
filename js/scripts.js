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

let currentDisplay = "";
// let operator;
let operatorValue = 0;
let totalValue = 0;

const keys = document.querySelector('.keys');

const display = document.querySelector('#display');
display.textContent = '';

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    display.textContent += e.target.value;
    currentDisplay += e.target.value;
  });
});

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    operatorValue = parseFloat(currentDisplay);
    let operator = e.target.value;
    totalValue = operate(operator, totalValue, operatorValue);
    currentDisplay = "";
    display.textContent = '';
  });
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', (e) => {
  totalValue = operate(operator, totalValue, operatorValue);
  currentDisplay.textContent = totalValue;
  currentDisplay = "";
  // operator = "";
  operatorValue = 0;
  // totalValue = 0;
});
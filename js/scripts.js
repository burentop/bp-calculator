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

const keys = document.querySelector('.keys');

const display = document.querySelector('#display');
display.textContent = '';

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    display.textContent += e.target.value;
  });
});